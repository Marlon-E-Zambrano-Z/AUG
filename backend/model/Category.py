from .Proficiency import Proficiency
from typing import List
class Category():
  def __init__(self, id: int, name: str):
    self.id = id
    self.name = name
    self.__proficiency: List[Proficiency] = []
  
  @property
  def id(self) -> int:
    return self.__id

  @id.setter
  def id(self, value: int) -> None:
    self.__id = value
  
  @property
  def name(self) -> int:
    return self.__name
  
  @name.setter
  def name(self, value) -> None:
    self.__name = value
  
  @property
  def proficiency(self) -> List[Proficiency]:
    return self.__proficiency
  
  def addProficiency(self, profi: Proficiency):
    self.__proficiency.append(profi)
    
  def removeProficiency(self, index: int):
    del self.__proficiency[index]