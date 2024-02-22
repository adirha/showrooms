import { Loader } from "@mantine/core";
import { useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import { Navbar } from "../../components/Navbar";
import { Board } from "../../components/board/Board";
import {
  EventTypes,
  useCreateUserActivityMutation,
  useShowroomByIdQuery,
} from "../../generated/graphql";
import { showNotification } from "@mantine/notifications";

export const ShowroomPage = () => {
  const { loading, data } = useShowroomByIdQuery({
    // When there will be multiple showrooms the ID will be taken from the url pathname
    variables: { id: "65d6340eec256b6a42ce1afd" },
    onError: () => {
      showNotification({
        message: "Something went wrong, please try again later",
      });
    },
  });

  const [createUserActivity] = useCreateUserActivityMutation();

  useEffect(() => {
    if (!loading && data) {
      const { title, boards } = data.showroomById;
      createUserActivity({
        variables: {
          input: {
            page: title,
            data: { boardId: boards[0].id as string },
            eventType: EventTypes.PageLoad,
          },
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (loading || !data?.showroomById.boards) {
    return <Loader />;
  }
  return (
    <MainLayout
      logo={data.showroomById.title}
      navbar={
        <Navbar
          navLinks={data.showroomById.navLinks}
          currentPage={data.showroomById.title}
          boards={data.showroomById.boards}
        />
      }
    >
      {data.showroomById.boards.map((board, index: number) => (
        <Board key={index} board={board} isFirstBoard={!index} />
      ))}
    </MainLayout>
  );
};
