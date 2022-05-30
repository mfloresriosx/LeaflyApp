import pymysql
import serial
import time
import mysql.connector

class App:
    def __init__(self):
        self.conn = pymysql.connect(user='root',password='',
                                   host='localhost',
                                   database='growbase',
                                   port=3306)
        self.cursor = self.conn.cursor()

    def Insertar(self):
        sql = "insert into humedad_table(lvl_agua) values('{}')".format(cad)
        self.cursor.execute(sql)
        self.conn.commit()

aplication = App()

serialArduino = serial.Serial("COM3",9600,timeout=1.0)
#timeout (1 segundo) o tiempo máximo de espera para una lectura.
time.sleep(1) # espera 1 seg, para dar tiempoa conectarse

while True:

     cad =serialArduino.readline().decode('ascii').strip()
     if(cad != ''):
         print(cad)
         aplication.Insertar()





