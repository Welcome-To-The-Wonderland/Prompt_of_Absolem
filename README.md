#Prompt_of_Absolem
A web-based application that generates a selected number of jobs/experiences and generates a resume of those things

Useful for people who have a wide variety of fields they want to apply to
Feature list: 
  - "categorize" specific chunks with labels
      - I should be able to select or deselect a full category as I desire
  - Upload / export CSV to save data
  - Hold info in cache so you can use it later
  - Different resume templates

Version 1.1 Feature list: 
  - use redis for data retrieval to mimic a set associative cache (since it's the most flexible) using c++
      - https://build-your-own.org/redis/


Note: 
  - CSV imports using PapaParse
  - PDF export using jspdf 
  - CSV export (use vanilla ?)

Learning process: 
  1. https://nextjs.org/learn/react-foundations (done)
  2. https://nextjs.org/learn/dashboard-app (done)
  3. https://www.youtube.com/watch?v=tIdNeoHniEY

Notes for structures: 
Toggleable: deselected should be greyed out

  1. Header Section
      - FAQ
      - Search (for labels)
            - Search for labels and the relevant <> tag is highlighted (prolly just change background-colour?)
      - Settings
            - Import
            - Export
  2. Everything below (sections 3 - 12) should be forms
  3. Name section
      - Name
      - Phone number
      - email
      - Toggleable
         - Github
         - Website
         - LinkedIn
         
  5. Education section
      - School name
      - Start date (just need month - year)
      - End Date (just need month - year)
      - Location
      - Toggleable
        - Degree
        - Relevant coursework
        - GPA
  7. Experience section
     - Prolly just an array?
     - On key press "enter", the input is segmented as a "label" 
  9. Skills section
      - Either just a text area or maybe find a way to store each individual string in an array?
      - User hits "enter" and that's considered a single string
  11. Labels
     - Click and it opens an <input> type=text
     - hit enter and it creates "label" that can be searched for, let's you continue typing and hit enter again
  12. Will probably need a submit button
