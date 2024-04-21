import CardDiaries from "@/components/global/(diary)/CardDiaries";
import Wrapper from "@/components/global/Wrapper";

export const revalidate = 0; // agar tidak perlu refresh

export default function page(): React.ReactElement {
  return (
    <Wrapper title="Homepage">
      <CardDiaries />
    </Wrapper>
  );
}