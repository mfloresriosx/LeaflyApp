const int salida = 8;
int awa;
void setup()
{
  Serial.begin(9600);
  delay(30);
  pinMode(salida,OUTPUT);

}
void loop() //Definimos nuestra secuencia.
{
    awa = analogRead(A1);
    if(awa >= 600) {
      Serial.println(100);
      delay(30000);
    }
    if(awa <= 599 && awa >= 500) {
      Serial.println(70);
      delay(30000);
    }
    if(awa <= 499 && awa >= 450) {
      Serial.println(50);
      delay(30000);
    }
    if(awa <= 449 && awa >= 300) {
      Serial.println(20);
      digitalWrite(salida , HIGH);   // poner el Pin en HIGH
      delay(30000);
    }
    if(awa <= 299) {
      Serial.println(0);
      digitalWrite(salida , HIGH);   // poner el Pin en HIGH
      delay(30000);
    }
    digitalWrite(salida , LOW);
    //delay(1000);
  
}
