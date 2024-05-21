import React, { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { Circle, G, Path, Text } from "react-native-svg";
import differenceWith from "ramda/src/differenceWith";

import { bodyFront } from "./assets/bodyFront";
import { bodyBack } from "./assets/bodyBack";
import { SvgMaleWrapper } from "./components/SvgMaleWrapper";
import { bodyFemaleFront } from "./assets/bodyFemaleFront";
import { bodyFemaleBack } from "./assets/bodyFemaleBack";
import { SvgFemaleWrapper } from "./components/SvgFemaleWrapper";
import { SkinType, skinColorMapping } from './assets/skinTypes'
import { Animated, Pressable } from 'react-native';

export type Slug =
  | "abs"
  | "adductors"
  | "ankles"
  | "biceps"
  | "calves"
  | "chest"
  | "shoulders"
  | "shoulders"
  | "feet"
  | "forearm"
  | "genitals"
  | "gluteal"
  | "hamstring"
  | "hands"
  | "hair"
  | "head"
  | "knees"
  | "lower-back"
  | "neck"
  | "obliques"
  | "quadriceps"
  | "tibialis"
  | "trapezius"
  | "triceps"
  | "upper-back";

export interface BodyPart {
  circleColor?: string;
  circleRadius?: number;
  circleAnimate?: boolean;
  intensity?: number;
  color: string;
  slug: Slug;
  pathArray?: string[];
  badgeCount?: number;
  textPosition: { x: number; y: number };
}

type Props = {
  colors: ReadonlyArray<string>;
  data: ReadonlyArray<BodyPart>;
  scale: number;
  frontOnly: boolean;
  backOnly: boolean;
  side: "front" | "back";
  gender?: "male" | "female";
  skinType: SkinType;
  onBodyPartPress: (b: BodyPart) => void;
};

const comparison = (a: BodyPart, b: BodyPart) => a.slug === b.slug;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Body = ({
  colors,
  data,
  scale,
  side,
  gender = "male",
  skinType = 3,
  onBodyPartPress,
}: Props) => {

  const radiusAnim = useRef(new Animated.Value(40)).current;
  useEffect(() => {
    const pulsate = () => {
      Animated.sequence([
          Animated.timing(radiusAnim, { toValue: 40, duration: 500, useNativeDriver: true }),
          Animated.timing(radiusAnim, { toValue: 36, duration: 500, useNativeDriver: true }),
      ]).start(() => pulsate());
    };
    pulsate();
  }, [radiusAnim]);


  // '#0096C7' - Azul Medio
  // '#30BAD9' - Azul Claro
  // '#90E0EF' - Azul Muy Claro
  const skinColor = skinColorMapping[skinType][0];
  const maxBadgeCount = useMemo(() => Math.max(...data.map(part => part.badgeCount || 0)), [data]);
  
  const getCircleColorAndSize = useCallback((badgeCount: number) => {
    const ratio = badgeCount / maxBadgeCount;
    if (ratio > 0.7) {
      return { color: 'rgba(0, 119, 182, 0.8)', radius: 36, animate: true };
    } else if (ratio > 0.35) {
      return { color: 'rgba(48, 186, 217, 0.8)', radius: 28, animate: false };
    } else {
      return { color: 'rgba(144, 224, 239, 0.8)', radius: 18, animate: false };
    }
  }, [maxBadgeCount]);

  const mergedBodyParts = useCallback((dataSource: ReadonlyArray<BodyPart>) => {
    const innerData = data.map((d) => {
      const matchedPart = dataSource.find(t => t.slug === d.slug);
      if (matchedPart) {
        const { color, radius, animate } = getCircleColorAndSize(d.badgeCount || 0);
        return { ...matchedPart, ...d, circleColor: color, circleRadius: radius, circleAnimate: animate };
      }
      return null;
    }).filter(Boolean);
    const coloredBodyParts = innerData.map((d) => {
      const bodyPart = data.find((e) => e.slug === d?.slug);
      let colorIntensity = 1;
      if (bodyPart?.intensity) colorIntensity = bodyPart.intensity;
      return { ...d, color: colors[colorIntensity - 1] };
    });
    const formattedBodyParts = differenceWith(comparison, dataSource, data);

    return [...formattedBodyParts, ...coloredBodyParts];
  },[data, colors]);

  const getColorToFill = (bodyPart: BodyPart) => {
    return bodyPart.intensity ? colors[bodyPart.intensity -1] : bodyPart.color;
  };
  
  const renderBodySvg = (data: ReadonlyArray<BodyPart>) => {
    const SvgWrapper = gender === "male" ? SvgMaleWrapper : SvgFemaleWrapper;
    return (
      <SvgWrapper side={side} scale={scale} skinColor={skinColor}>
        {mergedBodyParts(data).map((bodyPart: BodyPart) => (
          bodyPart.pathArray?.map((path: string) => {
            return (
              <G key={path}>
                <Path
                  onPress={() => onBodyPartPress?.(bodyPart)}
                  id={bodyPart.slug}
                  fill={getColorToFill(bodyPart)}
                  d={path}
                />
                {bodyPart.badgeCount && bodyPart.badgeCount > 0 && (
                  <>
                    <AnimatedCircle
                      cx={bodyPart.textPosition.x}
                      cy={bodyPart.textPosition.y}
                      r={bodyPart.circleAnimate ? radiusAnim : bodyPart.circleRadius}
                      fill={bodyPart.circleColor}
                      onPress={() => onBodyPartPress?.(bodyPart)}
                    />
                    <Text
                      x={bodyPart.textPosition.x}
                      y={bodyPart.textPosition.y + 4}
                      fill="white"
                      fontSize="25"
                      fontWeight="bold"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                    >
                      {bodyPart.badgeCount}
                    </Text>
                    </>
                  )}
                </G>
            );
          })
        ))}
      </SvgWrapper>
    );
  };
  return gender === "female" ? renderBodySvg(side === "front" ? bodyFemaleFront(skinColor) : bodyFemaleBack(skinColor)) : renderBodySvg(side === "front" ? bodyFront(skinColor) : bodyBack(skinColor));
};

Body.defaultProps = {
  scale: 1,
  colors: skinColorMapping[3].slice(1),
  zoomOnPress: false,
  side: "front",
  skinType: 3,
};

export default memo(Body);
