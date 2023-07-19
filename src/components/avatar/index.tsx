"use client";
import React from "react";
import { useCharacterAvatar } from "@crossbell/ui";
import { PropsWithChildren } from "react";
import { CharacterEntity } from "crossbell";
import { Avatar as Avatar_, AvatarProps } from "@mantine/core";

export function Avatar({
  characterId,
  character: initialCharacter,
  ...props
}: PropsWithChildren<
  (
    | {
        characterId?: number | null;
        character?: CharacterEntity | null;
      }
    | {
        characterId?: never;
        character: CharacterEntity;
      }
  ) &
    AvatarProps
>): any {
  const { src: avatarSrc, character } = useCharacterAvatar({
    character: initialCharacter,
    characterId,
    disabled: false,
  });
  console.log(avatarSrc, character);
  return (
    <>
      <Avatar_
        className="bg-coolgray-100"
        src={avatarSrc}
        radius="xl"
        {...props}
      />
    </>
  );
}
