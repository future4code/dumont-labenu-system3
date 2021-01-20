## LabenuSystem:

## Estrutura de Dados

- Students:

    - id
    - name
    - email
    - birthday_date
    - hobbies

- Teachers:

    - id
    - name
    - email
    - birthday_date
    - specialties react| redux | css | testes | typescript | poo | backend

- Class:

    - id
    - name
    - start_date
    - finish_date
    - module 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined
    - class_type integral | nocturnal

    - teachers_list
    - students_list


## Criação de Tabelas MySQL

CREATE TABLE students (
    id VARCHAR (64) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (64) NOT NULL,
    birthday_date DATE NOT NULL,
    hobbies VARCHAR (255) NOT NULL,
    class_id VARCHAR (64), 
    FOREING KEY (class_id) REFERENCES classes_labenu (id)
);

CREATE TABLE teachers_labenu (
    id VARCHAR (64) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (64) NOT NULL,
    birthday_date DATE NOT NULL,
    specialities ENUM ("REACT", "REDUX", "CSS", "TESTES", 
    "TYPESCRIPT", "POO", "BACKEND") NOT NULL
);

CREATE TABLE classes_labenu (
    id VARCHAR (64) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    start_date DATE NOT NULL,
    finish_date DATE NOT NULL,
    module ENUM ("1", "2", "3", "4", "5", "6", "7", "UNDEFINED") DEFAULT "UNDEFINED",
    class_type ENUM ("integral" , "nocturnal")
    
);


Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização. 

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele. 

    - id
    - name
    - email
    - birthday_date
    - hobbies

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

    - id
    - name
    - email
    - birthday_date
    - specialties react| redux | css | testes | typescript | poo | backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

    - id
    - name
    - start_date
    - finish_date
    - teachers_list
    - students_list
    - module 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined
    - class_type integral | nocturnal

As funcionalidades básicas são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

→ Pegar a idade de algum estudante a partir do id
