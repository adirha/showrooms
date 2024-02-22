import { AspectRatio, createStyles, rem } from "@mantine/core";

const useStyles = createStyles(() => ({
  video: { border: 0, objectFit: "cover", height: rem(540), width: rem(620) },
}));

interface IVideoAssetProps {
  url: string;
  isStandAlone?: boolean;
}

const Video = ({ url }: { url: string }) => {
  const { classes } = useStyles();
  return (
    <video controls className={classes.video} poster={url}>
      <source src={url} type="video/mp4" />
    </video>
  );
};

export const VideoAsset = ({ url, isStandAlone }: IVideoAssetProps) =>
  isStandAlone ? (
    <AspectRatio ratio={960 / 540}>
      <Video url={url} />
    </AspectRatio>
  ) : (
    <Video url={url} />
  );
