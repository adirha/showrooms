import { Flex, Stack, Text, createStyles, rem } from "@mantine/core";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import {
  AssetTypes,
  BoardAsset as BoardAssetType,
} from "../../generated/graphql";
import { Asset } from "./Asset";

const useStyles = createStyles(({ fontSizes }) => ({
  titleText: {
    fontSize: rem(39),
    marginBottom: rem(48),
  },
  splitAssetContainer: {
    border: "1px solid #CED0DA",
  },
  descriptionsWrapper: {
    padding: `${rem(48)} ${rem(38)} ${rem(48)} ${rem(30)}`,
    alignSelf: "flex-start",
    width: rem(340),
    gap: rem(30),
    "> div:first-of-type": {
      gap: rem(8),
    },
    div: {
      fontFamily: "proximanova",
      fontSize: fontSizes.md,
    },
  },
}));

interface IBoardAssetProps {
  asset: BoardAssetType;
  withTitle: boolean;
}

export const BoardAsset = ({ asset, withTitle }: IBoardAssetProps) => {
  const {
    classes: { titleText, splitAssetContainer, descriptionsWrapper },
  } = useStyles();
  const { title, assetType, url, descriptions, link } = asset;
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (link && pathname.includes(link)) {
      ref.current?.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return descriptions?.length ? (
    <Stack spacing={0} ref={ref}>
      {title && <Text className={titleText}>{title}</Text>}
      <Flex className={splitAssetContainer}>
        <Asset url={url as string} assetType={assetType as AssetTypes} />
        <Stack className={descriptionsWrapper}>
          {descriptions.map(({ title: descriptionTitle, content }, index) => (
            <Stack key={index}>
              {descriptionTitle && <Text fw={700}>{descriptionTitle}</Text>}
              {content && <Text>{content}</Text>}
            </Stack>
          ))}
        </Stack>
      </Flex>
    </Stack>
  ) : (
    <Stack spacing={0} ref={ref}>
      {title && (
        <Text className={titleText} mt={withTitle ? rem("0px") : rem("40px")}>
          {title}
        </Text>
      )}
      <Asset
        isStandAlone
        url={url as string}
        assetType={assetType as AssetTypes}
      />
    </Stack>
  );
};
