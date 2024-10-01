
class Proficiency():
  def __init__(self, id: int, name: str, description: str):
    self.id = id
    self.name = name
    self.description = description
  
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
  def description(self) -> str:
    return self.__description
  
  @description.setter
  def description(self, value: str) -> None:
    self.__description = value