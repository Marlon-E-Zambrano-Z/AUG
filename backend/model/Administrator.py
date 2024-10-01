from .EPermission import EPermission
from .Learner import Learner

from typing import List

class Administrator():
  def __init__(self, id, name, password) -> None:
    self.id = id
    self.name = name
    self.password = password
    self.__permission = tuple(permission for permission in EPermission)
    self.__learner : List[Learner] = []
  
  @property
  def id(self) -> int:
    return self.__id
  
  @id.setter
  def id(self, value: int) -> None:
    self.__id = value
    
  @property
  def name(self) -> str:
    return self.__name
  
  @name.setter
  def name(self, value: str):
    self.__name = value
  
  @property
  def password(self) -> str:
    return self.__password
  
  @password.setter
  def password(self, value: str):
    self.__password = value
  
  
  @property
  def learner(self) -> List[Learner]:
    return self.__learner
  
  def addLearner(self, learner : Learner) -> None:
    self.__learner.append(learner)
    
  def removeLearner(self, index: int) -> None:
    del self.__learner[index]