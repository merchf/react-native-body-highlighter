import React, { memo, useCallback, useEffect, useRef } from "react";
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
  const mergedBodyParts = useCallback(
    (dataSource: ReadonlyArray<BodyPart>) => {
      const innerData = data
        .map((d) => {
          const matchedPart = dataSource.find(t => t.slug === d.slug);
          return matchedPart ? {...matchedPart, badgeCount: d.badgeCount} : null;
        })
        .filter(Boolean);
      console.log("innerData tal cual está", innerData);
      // const innerData = data.map(d => {
      //   const bodyPart = data.find(e => e.slug === d.slug);
      //   return bodyPart ? { ...d, badgeCount: bodyPart.badgeCount } : d;
      // }).filter(Boolean);
      // console.log("innerData MODIFICADO", innerData);
      const coloredBodyParts = innerData.map((d) => {
        const bodyPart = data.find((e) => e.slug === d?.slug);
        let colorIntensity = 1;
        if (bodyPart?.intensity) colorIntensity = bodyPart.intensity;
        return { ...d, color: colors[colorIntensity - 1] };
      });

      const formattedBodyParts = differenceWith(comparison, dataSource, data);

      return [...formattedBodyParts, ...coloredBodyParts];
    },
    [data, colors]
  );

  const getColorToFill = (bodyPart: BodyPart) => {
    let color;
    if (bodyPart.intensity) color = colors[bodyPart.intensity];
    else color = bodyPart.color;
    return color;
  };

  const radiusAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    const pulsate = () => {
        Animated.sequence([
            Animated.timing(radiusAnim, {
                toValue: 36,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(radiusAnim, {
                toValue: 30,
                duration: 500,
                useNativeDriver: true
            }),
        ]).start(() => pulsate());
    };
    pulsate();
  }, [radiusAnim]);

  const skinColor = skinColorMapping[skinType];
  const renderBodySvg = (data: ReadonlyArray<BodyPart>) => {
    const SvgWrapper = gender === "male" ? SvgMaleWrapper : SvgFemaleWrapper;
    return (
      <SvgWrapper side={side} scale={scale} skinColor={skinColor}>
        {mergedBodyParts(data).map((bodyPart: BodyPart) => {
          if (bodyPart.pathArray) {
            return bodyPart.pathArray.map((path: string) => {
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
                        r={radiusAnim}
                        fill={`rgba(0, 0, 255, 0.5)`}
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
            });
          }
        })}
      </SvgWrapper>
    );
  };

  if (gender === "female") {
    return renderBodySvg(side === "front" ? bodyFemaleFront(skinColor) : bodyFemaleBack(skinColor));
  }

  return renderBodySvg(side === "front" ? bodyFront(skinColor) : bodyBack(skinColor));
};

Body.defaultProps = {
  scale: 1,
  colors: ["#ff9800", "#ffecb3"],
  zoomOnPress: false,
  side: "front",
  skinType: 3,
};

export default memo(Body);
