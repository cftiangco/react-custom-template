
import Container from "../../../components/Container"
import TextBox from "../../../components/TextBox";

const Fields = () => {
    return (
        <Container>
            <div className="flex items-center gap-2">
                <TextBox 
                    label="First Name"
                    required={true}
                    placeHolder="Required field"
                />

                <TextBox 
                    label="Middle Name"
                    required={false}
                    placeHolder="Not Required"
                />
            </div>
        </Container>
    )
}

export default Fields