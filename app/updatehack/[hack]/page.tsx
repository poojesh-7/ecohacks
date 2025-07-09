import UpdateHackForm from "@/components/main_sections/HackForm";

const UpdateHackPage = ({params}:{params:{hack:string}}) => {
 return <UpdateHackForm hack={params.hack} formActionType="update" />
};

export default UpdateHackPage;
