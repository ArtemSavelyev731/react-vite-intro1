import {useState} from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores tenetur nemo reiciendis similique eaque corrupti minus repellat quo cumque ea repellendus harum, animi hic veniam eius! Adipisci, velit? Laborum?</p>
            </Modal>
        </section>
    )
}