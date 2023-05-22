import Button from "../../../components/Button"
import Container from "../../../components/Container"
import BasicModal from "../../../components/BasicModal";

interface IModals {
    onClickBasicModal?:any;
    basicModalVisible?:boolean;
    basicModalOnClickClose?:any;
}


const Modals = ({
    onClickBasicModal,
    basicModalVisible,
    basicModalOnClickClose,
}:IModals) => {
    return (
        <Container>
            <Button 
                type="primary" 
                label="Basic Modal"
                onClick={onClickBasicModal}
            />

            <BasicModal 
                visible={basicModalVisible} 
                onClickClose={basicModalOnClickClose}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque sequi. Dolores cupiditate reprehenderit ipsum quas unde enim repellendus alias fugiat accusantium vel nam est asperiores repellat, libero odit dignissimos laboriosam doloremque sunt inventore accusamus, quam, corporis fugit! Perferendis, quidem consequatur numquam placeat cupiditate necessitatibus ipsum deserunt nihil omnis voluptate quam non blanditiis aperiam odit debitis obcaecati dicta vero quo provident repellendus libero soluta? Tempora suscipit atque laboriosam ducimus quo facere pariatur optio quam consequatur. Eligendi voluptas inventore dolorum, earum suscipit sequi et ratione laudantium sit, odit, blanditiis quibusdam tempore. Maxime minima dolorum facilis earum? Dolore fugit officia asperiores eos sed repellat, reiciendis a veritatis perferendis ab voluptatem consectetur inventore facere voluptas repellendus iusto corrupti, explicabo et ad modi architecto! Maiores iste explicabo eveniet amet mollitia vel dolor suscipit soluta eligendi fuga debitis, facere beatae, reiciendis voluptatem quia quis inventore ut odio aliquam corporis id. Perspiciatis ea aliquid, dolorem omnis deserunt facere libero enim excepturi possimus. Eaque deserunt repellat illo mollitia accusamus, molestiae earum officia repellendus sit cupiditate, cum sequi, deleniti maxime sint ullam. Corporis quam ea vero suscipit libero nam ut, eveniet asperiores nobis aut molestias incidunt et mollitia error aperiam ipsam est laboriosam dolor perferendis voluptas sequi earum numquam modi a? Assumenda pariatur ratione corrupti consectetur? Fugiat provident non dicta repudiandae sint saepe omnis, dignissimos nostrum accusamus voluptas, quidem adipisci quo, sunt suscipit. Illum magni aliquam ab! Dignissimos fugiat, vero explicabo officiis, excepturi id repudiandae alias nostrum sint eos deserunt quos voluptatem nobis libero quis commodi laborum accusamus recusandae fuga magnam temporibus itaque? Commodi praesentium non labore quae quas sequi modi enim vitae in, assumenda eveniet iusto est. Minus aspernatur impedit facilis blanditiis eum ipsam mollitia, pariatur sed. Pariatur deleniti quia iste minima maiores explicabo delectus minus! Sint architecto tenetur pariatur! Dignissimos nostrum fugit fuga magni similique vitae?
            </BasicModal>
        </Container>
    )
}

export default Modals