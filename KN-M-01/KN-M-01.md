# KN01

## A) Installation

### MongoDB Compass mit DB-Liste
![image](https://github.com/user-attachments/assets/ed808847-d926-4b43-9b6e-c5bfc1a42922)

### AuthSource im Connection String

```authSource``` spezifiziert die Datenbank, in der die Anmeldeinformationen gespeichert sind

### Sed Command

- ```sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf```
  - Dieser Befehl sucht in der Konfigurationsdatei nach einer auskommentierten Zeile und entfernt das ```#```. Darunter wird ```authorization: enabled``` eingefügt.
 
- ```sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf```
  - Dieser Befehl ersetzt ```127.0.0.1``` durch ```0.0.0.0``` in der Konfigurationsdatei. Dadurch akzepiert MongoDB jetzt Verbindungen von allen IP-Adressen, nicht nur von ```localhost```.
 
### Screenshot von geänderten Werten
![image](https://github.com/user-attachments/assets/5f4bb424-768d-4133-8160-2f939c749afd)

## B) Erste Schritte GUI

### Screenshot JSON Dokument
![image](https://github.com/user-attachments/assets/68219083-da12-4e8c-93c7-c2e56cda30a2)

Um ohne Änderungen ein Datum einzufügen, müsste man es folgendermassen im JSON Dokument formatieren:
```JSON
"geburtsdatum": {
    "$date": "2000-01-01T00:00:00.000Z"
  }
```

### Screenshot MongoDB Compass mit Datenbank, Collection und Dokument
![image](https://github.com/user-attachments/assets/557b2460-c3ae-4037-b61b-1b6e726a189a)

## C) Erste Schritte Shell

### Screenshot Befehle in MongoDB Compass Shell
![Screenshot 2025-03-07 151331](https://github.com/user-attachments/assets/b3950942-2711-4176-ae07-24a52ad14f81)

### Screenshot Befehle in AWS Server Console
![Screenshot 2025-03-07 152056](https://github.com/user-attachments/assets/87786db9-0f5e-4ab5-ae2a-19f12818efef)

### Erklärung der 5 Befehlen
1. ```show dbs;``` Listet alle Datenbanken auf
2. ```show databases;``` Gleich wie 1.
3. ```use dbname``` Verwendung einer bestimmten Datenbank
4. ```show collections;``` Listet alle Collections auf
5. ```show tables;``` Listet alle Tables auf

Der Unterschied zwischen Collections und Tables ist, dass Collections automatisch beim befüllen mit Daten erstellt werden. Sie können nicht manuell erstellt werden.
