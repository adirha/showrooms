import { AssetTypes } from "../../generated/graphql";
import { ImageAsset } from "./ImageAsset";
import { VideoAsset } from "./VideoAsset";

interface IAssetProps {
  url: string;
  assetType: AssetTypes;
  isStandAlone?: boolean;
}

export const Asset = ({ url, assetType, isStandAlone }: IAssetProps) => {
  return assetType === AssetTypes.Video ? (
    <VideoAsset url={url} isStandAlone={isStandAlone} />
  ) : (
    <ImageAsset url={url} isStandAlone={isStandAlone} />
  );
};
