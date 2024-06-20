---
title: "SQL for beginners"
description: "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It allows users to create, read, update, and delete data efficiently."
date: "2024-06-23"
author: "Anshuman Bharatiya"
tags: ["SQL"]
---

**Quick Summary:**

Welcome to the first part of our SQL series! If you're new to SQL (Structured Query Language), you've come to the right place. This beginner's guide will help you understand the basics of SQL, why it's important, and how to get started with writing your first queries. Let's dive in!

# What is SQL?
SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It allows users to create, read, update, and delete data efficiently. With SQL, you can perform tasks such as querying data from tables, inserting new records, updating existing records, and deleting records. SQL is essential for data management and is widely used in various applications, from small-scale projects to large enterprise systems. Essentially, SQL is the bridge between your applications and the data stored in your database.

# Why Learn SQL?

1. **High Demand:** SQL is one of the most sought-after skills in the job market. From data analysts to backend developers, proficiency in SQL is highly valued.

2. **Versatility:** SQL is used across various database systems like MySQL, PostgreSQL, SQL Server, and Oracle.

3. **Data Management:** SQL enables efficient data manipulation and retrieval, making it a crucial tool for anyone working with data.


# Getting Started with SQL

Setting Up Your Environment
Before you start writing SQL queries, you'll need a database to work with. Here are a few popular database management systems (DBMS) you can use:

- **MySQL**: Open-source and widely used.
- **PostgreSQL**: Known for its robustness and standards compliance.
- **SQLite**: Lightweight and serverless, great for learning and small projects.

You can install any of these systems locally or use online platforms like DB Fiddle or SQL Fiddle for quick practice.

# Basic SQL Concepts
1. **Database**: A collection of related data organized in tables. Database is an organized collection of structured data or information stored electronically in a computer system. It is designed to efficiently manage, manipulate, and retrieve data according to specific requirements.

2. **Table**: Table is a structured collection of data stored in rows and columns. It's the fundamental building block of a relational database management system (RDBMS). Each table is identified by a unique name and consists of columns, which define the attributes or properties of the data, and rows, which represent individual records or instances of the data

3. **Row**: A single record in a table.

4. **Column**: A single field in a table, representing an attribute of the data.


# The Five Sub-Languages of SQL
SQL is divided into five sub-languages, each designed for specific tasks. Understanding these sub-languages will give you a comprehensive foundation in SQL. In this blog, we'll cover DML, DDL, and DQL. The other sub-languages, DCL and TCL, will be covered in our intermediate topic.


**Data Query Language (DQL)**

DQL deals with retrieving data from a database. The primary command used in DQL is the SELECT statement.

```sql
Examples: SELECT * FROM EMP;
```

**Data Definition Language (DDL)**

DDL is concerned with defining and managing the structure of databases and database objects. It includes commands for creating, altering, and dropping databases, tables, views, indexes, and other schema objects.

```sql
Examples: CREATE TABLE, ALTER TABLE, DROP TABLE
```

**Data Manipulation Language (DML)**

DML is used for manipulating data stored in the database. It includes commands for inserting, updating, deleting, and merging data.

```sql
Examples: INSERT, UPDATE, DELETE
```

**Data Control Language (DCL)**

DCL is responsible for controlling access to data within the database. It includes commands for granting and revoking permissions and privileges to users and roles.

```sql
Examples: GRANT, REVOKE
```

**Transaction Control Language (TCL)**

TCL deals with managing transactions within the database. It includes commands for starting, committing, and rolling back transactions.

```sql
Examples: COMMIT, ROLLBACK, SAVEPOINT
```

# Your First SQL Queries / SQL Practice

### Creating and Managing Databases

Before you can start working with tables, you need to create and manage databases. Here are the basic commands to get you started:

**_Create a Database: To create a database named "university":_**

```sql
CREATE DATABASE university;
```

**_Display All Databases: To list all databases:_**

```sql
SHOW DATABASES;
```

**_Delete or Drop a Database: To delete the "university" database:_**

```sql
DROP DATABASE university;
```

**_Use a Database: To start using the "university" database:_**

```sql
USE university;
```


### Creating and Managing Tables

Assume we want to create a table named `EMP` with the following structure:

| empid | empname | sal  | job     | deptno |
|-------|---------|------|---------|--------|
| 100   | jitu    | 1000 | Manager | 10     |
| 101   | situ    | 2000 | Clerk   | 20     |
| 102   | kitu    | 5000 | Analyst | 30     |
| 103   | pitu    | 8000 | Manager | 10     |
| 104   | ritu    | 9999 | Manager | 10     |


**_Create a Table:_**

```sql
CREATE TABLE EMP (empid INT, empname VARCHAR(100), sal INT, job VARCHAR(50), deptno INT);
```

**_Display All Tables: To list all tables in the current database:_**

```sql
SHOW TABLES;
```

**_Display the Structure of a Table: To describe the structure of the `EMP` table:_**

```sql
DESC EMP;
```

**_Insert Data into a Table: To insert multiple records at once:_**

```sql
INSERT INTO EMP (empid, empname, sal, job, deptno) VALUES 
(100, 'jitu', 1000, 'Manager', 10), 
(101, 'situ', 2000, 'Clerk', 20), 
(102, 'kitu', 5000, 'Analyst', 30), 
(103, 'pitu', 8000, 'Manager', 10), 
(104, 'ritu', 9999, 'Manager', 10);
```

**_Display All Records from a Table:_**

```sql
SELECT * FROM EMP;
```

**_Display Only 2 Records from the Table: `LIMIT`_**

```sql
SELECT * FROM EMP LIMIT 2;
```

**_Display Employee Salary in Descending Order:_**

```sql
SELECT * FROM EMP ORDER BY sal DESC;
```

**_Set Nickname/Alias for Columns:_**

```sql
SELECT empid AS EMP_ID FROM EMP;

SELECT sal AS SALARY FROM EMP;
```

**_Display Row Number from Table:_**

```sql
SELECT ROW_NUMBER() OVER() AS ROW FROM EMP;

SELECT ROW_NUMBER() OVER (ORDER BY empid) AS row_number, empname FROM EMP;
```

**_Display the Last Record from the Table:_**

```sql
SELECT *, ROW_NUMBER() OVER() AS RN FROM EMP ORDER BY RN DESC LIMIT 1;
```

**_Update Salary of 'jitu' from EMP Table where empid is 100:_**

```sql
SELECT sal FROM EMP WHERE empid = 100;

UPDATE EMP SET sal = 2500 WHERE empid = 100;
```

**_Rename the Table from `EMP` to `EMPLOYEE`:_**

```sql
RENAME TABLE EMP TO EMPLOYEE;

RENAME TABLE EMPLOYEE TO EMP;
```

**_Change the Column Name/Datatype for `sal`:_**

```sql
ALTER TABLE EMP CHANGE sal salary INT(11) NULL DEFAULT NULL;
```

**_Add a New Column to the Table:_**

```sql
ALTER TABLE EMP ADD COLUMN age INT;
```

**_Set 26 Value for `age` Column in EMP Table:_**

```sql
UPDATE EMP SET age = 26;
```

**_Delete the Column `age` from the Table:_**

```sql
ALTER TABLE EMP DROP COLUMN age;
```

**_Display Employees Whose Salary is Greater than 3000:_**

```sql
SELECT * FROM EMP WHERE sal > 3000;
```


**_Display List of Employees Whose Salary is Greater than 'jitu's Salary:_**

```sql
SELECT * FROM EMP WHERE sal > (SELECT sal FROM EMP WHERE empname='jitu');
```


**_Display Sum, Max, Min, Avg Employee Salary from the Table (Aggregate Functions):_**

```sql
SELECT SUM(sal), MIN(sal), MAX(sal), AVG(sal) FROM EMP;
```


# Conclusion
Congratulations! You've just written your first SQL queries. Understanding these basics is the first step towards mastering SQL. Practice these commands and try creating your own tables and queries. In our next blog, we'll dive into more advanced SQL topics, perfect for those who are ready to move beyond the basics. Happy querying!

Stay tuned for our next post: **SQL for Intermediates.**

<br>

**_Posted By ~ Anshuman Bharatiya on Sunday, 23rd Jun 2024_**

**_If you like this post, feel free to share it._**

**_Thank You_**
