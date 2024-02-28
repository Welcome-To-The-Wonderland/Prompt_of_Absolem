#Prompt_of_Absolem
A web-based application that generates a selected number of jobs/experiences and generates a resume of those things

Useful for people who have a wide variety of fields they want to apply to
Feature list: 
  - "categorize" specific chunks with labels
      - I should be able to select or deselect a full category as I desire
  - Upload / export CSV to save data
  - Hold info in cache so you can use it later
  - Different resume templates


Note: 
  - CSV imports using PapaParse
  - PDF export using jspdf 
  - CSV export (use vanilla ?)

Learning process: 
  1. https://nextjs.org/learn/react-foundations
  2. https://nextjs.org/learn/dashboard-app

Notes for structures: 
Toggleable: deselected should be greyed out

  1. Header Section
      - FAQ
      - Search (for labels)
            - Search for labels and the relevant <> tag is highlighted (prolly just change background-colour?)
      - Settings
            - Import
            - Export
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
  10. Labels
     - Click and it opens an <input> type=text
     - hit enter and it creates "label" that can be searched for, let's you continue typing and hit enter again
