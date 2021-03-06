---
id: controlling-interview-order
title: Controlling Interview Order
sidebar_label: Controlling Interview Order
---

## The interview as a question library

You can think of a docassemble interview as a library of questions.
The only questions that docassemble will ask are those that are triggered,
either by a `mandatory` block or in some other way.

Docassemble will scan the interview file until it finds a question
that contains the answer to every field that is required by any
mandatory block. If a field isn't used in the mandatory block, or a
block that the mandatory block itself triggers, it will never be shown
to the user.

Copy and paste the interview below into your playground.

Before you run it, make a prediction.

1. Which questions will be asked?
1. Which question will be asked first? What will be the order of the remaining questions?

```yaml
---
question: |
  What is the average airspeed velocity of an unladen swallow?
fields:
  - no label: air_speed
---
question: |
  What is your quest?
fields:
  - no label: quest
---
question: |
  What is your name?
fields:
  - First name: first_name
  - Last name: last_name
---
mandatory: True
question: |
  Hello, ${ first_name }
subquestion: |
  You said the swallow's speed is ${ air_speed }

  Your first name is ${ first_name }
```

## Who's the boss? Why you should use only one mandatory block

There are a lot of ways to [control the
order](https://docassemble.org/docs/logic.html) of questions in a docassemble
interview. 

It's a good habit to use only **one** mandatory block in your interview.

Using one mandatory block can allow you to:

1. Visualize and trace your interview logic in one place
1. Better understand which code will end up executing and which will not

Copy and paste the interview below into your playground. Before you run it,
make a prediction.

1. What will be the last screen that is shown to the user?
1. What action will happen when the interview is complete?

```yaml
---
mandatory: True
question: |
  Please answer our intake questionnaire
continue button field: introduction
---
mandatory: True
question: |
  Tell us your name
fields:
  - First name: user_first_name
  - Last name: user_last_name
---
mandatory: True
question: |
  How old are you?
fields:
  - birthdate: birthday
    datatype: date
---
mandatory: True
question: |
  Results
subquestion: |
  Thank you, ${user_first_name}.
  
  We will send your results to Dewey, Cheatem and Howe.
---
template: email_contents
content: |
  Here is the intake
  
  First name: ${ user_first_name }  
  Last name: ${ user_last_name }

  Birthdate: ${birthday}
---
mandatory: True
code: |
  send_email(to="dewey@example.com", template=email_contents)
```

## Introducing the interview order block

