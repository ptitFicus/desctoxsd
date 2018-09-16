const fs = require('fs');
const xml2js = require('xml2js');
const parseLine = require('./lineParser')

const desc = `ID_PAIEMENT_SINISTRE  NOT NULL NUMBER(12)
REF_EVENEMENT         NOT NULL VARCHAR2(11 CHAR) 
REF_SOCIETAIRE        NOT NULL VARCHAR2(8 CHAR)  
NUMERO_PAIEMENT       NOT NULL NUMBER(3)         
ORIGINE_PAIEMENT               NUMBER(4)         
AUTEUR_PAIEMENT                NUMBER(4)         
TYPE_PAIEMENT                  NUMBER(4)         
STATUT_PAIEMENT                NUMBER(4)         
DATE_ENREGISTREMENT            DATE              
MODE_PAIEMENT                  NUMBER(4)         
NUMERO_PAIEMENT_LIE            NUMBER(3)         
ENTITE_GESTION_RETOUR          VARCHAR2(5 CHAR)  
MT_BRUT_DE_FRANCHISE           NUMBER(10,2)      
MT_NET_DE_FRANCHISE            NUMBER(10,2)      
DEVISE                         VARCHAR2(3 CHAR)  
CODE_PARTENAIRE                NUMBER(3)         
ENTITE_GESTION                 VARCHAR2(5 CHAR)  
NUMERO_GESTIONNAIRE            NUMBER(2)         
CETA                  NOT NULL VARCHAR2(2 CHAR)  
LCRE                  NOT NULL VARCHAR2(15 CHAR) 
TSCRE                 NOT NULL TIMESTAMP(6)      
TSMAJ                 NOT NULL TIMESTAMP(6)      
LMOD                  NOT NULL VARCHAR2(15 CHAR)`

const lines = desc.split("\n")
    .map(parseLine)
    .forEach(str => console.log(str))

var obj = {name: "Super", Surname: "Man", age: 23};

var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);

