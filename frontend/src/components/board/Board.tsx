import { Stack, Text, createStyles, rem } from "@mantine/core";
import { Board as BoardType } from "../../generated/graphql";
import { BoardAsset } from "./BoardAsset";

interface IStylesProps {
  isFullBoard: boolean;
}

const useStyles = createStyles(
  ({ spacing }, { isFullBoard }: IStylesProps) => ({
    boardContainer: {
      gap: spacing.lg,
      marginBottom: rem(40),
      marginTop: isFullBoard ? rem(80) : 0,
    },
    titleText: {
      fontFamily: "IBMPlexSerif",
      fontSize: rem(52),
    },
    assetsContainer: {
      gap: rem(48),
    },
  })
);

interface IBoardProps {
  board: BoardType;
  isFirstBoard?: boolean;
}

export const Board = ({ board, isFirstBoard }: IBoardProps) => {
  const { title, descriptions, assets } = board;
  const isFullBoard = !!(!isFirstBoard && title);
  const {
    classes: { boardContainer, titleText, assetsContainer },
  } = useStyles({ isFullBoard });

  return (
    <Stack className={boardContainer}>
      {title && <Text className={titleText}>{title}</Text>}
      {descriptions?.map(({ content }, index) => (
        <Text key={index} fz="md">
          {content}
        </Text>
      ))}
      <Stack className={assetsContainer}>
        {assets?.map((asset, index) => (
          <BoardAsset key={index} asset={asset} withTitle={!!title} />
        ))}
      </Stack>
    </Stack>
  );
};
