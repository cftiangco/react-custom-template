import Container from "../../../components/Container"

import Button from "../../../components/Button"

const Buttons = () => {
    return (
        <Container>
            <div className="flex items-center gap-3">

                <Button
                    type="primary"
                    label="Primary"
                />

                <Button
                    type="dark"
                    label="Dark"
                />

                <Button
                    type="outline"
                    label="Outline"
                />

            </div>
        </Container>
    )
}

export default Buttons