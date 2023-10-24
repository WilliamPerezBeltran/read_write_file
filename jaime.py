
import re
from datetime import datetime 


fecha_ultimo_suministro=input("Indique fecha del ultimo inventario de suministros recibido")
fecha_actual=input("Indique fecha actual")

 
def determinar_alerta(fecha_ultimo_suministro,fecha_actual):

  fecha_ultimo_suministro=datetime.strptime(fecha_ultimo_suministro, '%d/%m/%Y')
  fecha_actual=datetime.strptime(fecha_actual, '%d/%m/%Y')
  diferencia=fecha_actual-fecha_ultimo_suministro


  return int(str(diferencia).split()[0])



# 29/05/2021
# 15/05/2011
print(determinar_alerta(fecha_ultimo_suministro,fecha_actual))