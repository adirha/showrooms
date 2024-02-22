import { AspectRatio, Image, rem } from "@mantine/core";

interface IImageAssetProps {
  url: string;
  isStandAlone?: boolean;
}

export const ImageAsset = ({ url, isStandAlone }: IImageAssetProps) => {
  return isStandAlone ? (
    <AspectRatio ratio={960 / 540}>
      <Image fit="contain" src={url} />
    </AspectRatio>
  ) : (
    <Image height={rem(540)} width={rem(620)} src={url} />
  );
};
