import { MainLayout } from "@/layouts/MainLayout";

export default function about() {
  return <>This is the about page</>;
}

about.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
