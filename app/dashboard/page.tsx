import React from "react"
import Wrapper from "@/components/global/Wrapper";
import CreateDiaryForm from "@/components/dashboard/CreateDiaryForm";

const page = (): React.ReactElement => {
    return (
    <Wrapper title="DASHBOARD">
        <CreateDiaryForm/>
    </Wrapper>
    );
};
export default page;
