import React, { useState, useEffect, useContext } from 'react'
import { Card, ProgressBar } from './styles'
import { CheckCircle, XCircle, UserCirclePlus } from 'phosphor-react'
import { UserContext } from '../../context/context'

const Popup = () => {
    const { isUserAdded, isUserDeleted, isUserUpdated } = useContext(UserContext)
    const [progress, setProgress] = useState<number>(100)

    useEffect(() => {
      handleProgressBar()
    }, [])

    const handleProgressBar = () => {
        if (progress == 100) {
          setProgress((prevState) => (prevState = 99));
          const element = document.getElementById("myBar");
          if (element) {
            const definitelyAnElement: HTMLElement | null = element;
          }

          var width = 99;
          var id = setInterval(frame, 19);
          function frame() {
            if (width <= 0) {
              clearInterval(id);
              setProgress((prevState) => (prevState = 100));
            } else {
              width--;
              element.style.width = width + "%";
            }
          }
        }
    }

    if (isUserAdded) {
      return (
        <Card color="green">
            <p>Usuário adicionado</p>
            <CheckCircle size={30} weight="fill" color="green" />

            <ProgressBar id="myBar" color="green" />
        </Card>
      )
    }

    if (isUserDeleted) {
      return (
        <Card color="red">
            <p>Usuário deletado</p>
            <XCircle size={30} weight="fill" color="red" />

            <ProgressBar id="myBar" color="red" />
        </Card>
      )
    }

    if (isUserUpdated) {
      return (
        <Card color="#6200ee">
            <p>Usuário atualizado</p>
            <UserCirclePlus size={30} weight="fill" color="#6200ee" />

            <ProgressBar id="myBar" color="#6200ee" />
        </Card>
      )
    }

    return (
      <></>
  )
}

export default Popup