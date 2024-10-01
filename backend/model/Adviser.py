from .IUser import IUser
from .EPermission import EPermision
from .Learner import Learner
from .Proficiency import Proficiency

from datetime import datetime
from typing import List, Union

class Adviser(IUser):
    """
    Clase que representa a un asesor con atributos básicos, utilizando un
    diccionario de propiedades 'props' para inicializar los valores. ejemplo de dict
    
    Agrega las propiedades a las prop
    occupation:         string
    availabilities:     datetime[]
    """
    def __init__(self, props: dict) -> None:
        super().__init__(props)
        self.__state: bool = True
        self.occupation = props.get('occupation')
        self.__permission : tuple = (EPermision.READ, EPermision.UPDATE)
        self.__proficiency : List[Proficiency]= []
        self.__classroom : List[Learner] = None 
        self.__availabilities: List[datetime] = props.get('availabilities')
    
    @property
    def state(self) -> bool:
        return self.__state

    @state.setter
    def state(self, value : bool) -> None:
        self.__state = value

    @property
    def occupation(self) -> str:
        return self.__occupation

    @occupation.setter
    def occupation(self, value : str) -> None:
        self.__occupation = value
    
    @property
    def permission(self) -> tuple:
        return self.__permission
    
    @property
    def proficiency(self) -> List[Proficiency]:
        return self.__proficiency
  
    def addProficiency(self, profi: Proficiency):
        self.__proficiency.append(profi)
    
    def removeProficiency(self, index: int):
        del self.__proficiency[index]
    
    @property
    def classroom(self) -> Learner | List[Learner]:
        return self.__classroom
    
    def addLearner(self, learner: Learner):
        sef.__classroom.append(learner)
    
    def removeLearner(self, learner: Learner):
        i = 0
        while (i < len(self.__classroom)):
            if self.__classroom[i].id is learner.id:
                del self.classroom[i]
                return
            i = i + 1
    
    @property
    def availabilities(self) -> List[datetime]:
        return self.__availabilities
    
    def addAvailability(self, availability : datetime):
        self.__availabilities.append(availability)
    
    def removeAvailability(self, index: int, availability : datetime):
        if index in range(-len(self.__availabilities), len(self.__availabilities)):
            del self.__availabilities[index]
        
        raise IndexError("El indice ingresado esta fuera de rango")
    
    def clearAvailabilities(self):
        self.__availabilities.clear()
    