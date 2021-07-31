# Planning
Copy and past MVPs in as pseudocode so we can see where they're being achieved?
Build basic HTML so we can see where the data is moving to around the page?

# Code

  ## Inputs
  Form
    - Text input & search button
    
    - Select menu and submit button
      - Austin: 4-5 buttons to choose theme (use icons for space/on mobile?)

    - One state per input (n/a for buttons?) = "controlled inputs"

  ## API call
  Seach/theme API call doesn't happen on page load, only on user submit
    - how does that change useEffect? different dependency?
    - possible endpoint:
        `/words?rel_trg=cow` (words that are triggered by (strongly associated with) the word "cow")
        for us: `words?rel_trg={variable}` where `variable` is the theme keyword(s) or search term
    - alternative is `topics: {variable}` as a param, can be up to 5 words
    - add `max: 50` in the params to reduce the number of results

  Autocomplete API call on change in search text box: `api.datamuse.com/sug?s={textSoFar}`
   - use `max: 10` or similar so there's not endless results?

  Is there an API call for "function words & suffixes"? Write a list ourselves?
  

# Design

  ## Magnetic Words
  Typewriter font
  Words w black border + box-shadow
  *stretch*: assign random number, -10 to 10 and assign class to rotate each word