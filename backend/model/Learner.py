from .IUser import IUser
from .Adviser import Adviser

from typing import List

class Learner(IUser):
    """
    Clase que representa a un aprendiz, hereda de la interfaz IUser.
    
    agrega al dict una propiedad 
    payment : bool
    """

    def __init__(self, props: dict) -> None:
        super().__init__(props)
        self.payment : bool = props.get('payment')
        self.__adviser : Adviser | List[Adviser] = None
        self.__permission : tuple = (EPermision.READ, EPermision.UPDATE)
    
    @property
    def payment(self) -> bool:
        return self.__payment
    
    @payment.setter
    def payment(self, value: bool) -> None:
        self.__payment = value
    
    @property
    def permission(self) -> tuple:
        return self.__permission
    
    @property
    def adviser(self) -> Adviser | List[Adviser]:
        return self.__adviser
    
    def adivser(self, value: Adviser | List[Adviser]) -> None:
        if self.__adviser is None :
            self.__adviser = value
        elif self.payment:
            tmp = self.__adviser
            self.__adviser = [value]
            self.__adviser.append(tmp)
    