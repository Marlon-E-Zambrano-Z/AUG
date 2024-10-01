from abc import ABC
from datetime import datetime

class IUser(ABC):
    """
    Clase que representa un usuario con atributos básicos, utilizando un
    diccionario de propiedades 'props' para inicializar los valores. ejemplo de dict
    
    props = {
    'id': 1,
    'name': 'John Doe',
    'description': 'Software Developer',
    'email': 'johndoe@example.com',
    'password': 'securepassword123',
    'dateLog': datetime.now(),
    'dateBorn': datetime(1990, 5, 17),
    'gender': True
    }
    """

    def __init__(self, props: dict) -> None:
        self.id = props.get('id')
        self.name = props.get('name')
        self.description = props.get('description')
        self.email = props.get('email')
        self.password = props.get('password')
        self.dateLog = props.get('dateLog')
        self.dateBorn = props.get('dateBorn')
        self.gender = props.get('gender')

    # Getter y Setter para id
    @property
    def id(self) -> int:
        return self.__id

    @id.setter
    def id(self, value: int) -> None:
        self.__id = value

    # Getter y Setter para name
    @property
    def name(self) -> str:
        return self.__name

    @name.setter
    def name(self, value: str) -> None:
        self.__name = value

    # Getter y Setter para description
    @property
    def description(self) -> str:
        return self.__description

    @description.setter
    def description(self, value: str) -> None:
        self.__description = value

    # Getter y Setter para email
    @property
    def email(self) -> str:
        return self.__email

    @email.setter
    def email(self, value: str) -> None:
        self.__email = value

    # Getter y Setter para password
    @property
    def password(self) -> str:
        return self.__password

    @password.setter
    def password(self, value: str) -> None:
        self.__password = value

    # Getter y Setter para dateLog
    @property
    def dateLog(self) -> datetime:
        return self.__dateLog

    @dateLog.setter
    def dateLog(self, value: datetime) -> None:
        self.__dateLog = value

    # Getter y Setter para dateBorn
    @property
    def dateBorn(self) -> datetime:
        return self.__dateBorn

    @dateBorn.setter
    def dateBorn(self, value: datetime) -> None:
        self.__dateBorn = value

    # Getter y Setter para gender
    @property
    def gender(self) -> bool:
        return self.__gender

    @gender.setter
    def gender(self, value: bool) -> None:
        self.__gender = value
