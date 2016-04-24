# Debugging JavaScript Workshop

* Bugs & Debugging
  * [Rear Admiral Grace Hopper & the "Actual Bug"](http://www.computerworld.com/article/2515435/app-development/moth-in-the-machine--debugging-the-origins-of--bug-.html)
  * Writing code IS debugging; the question is how early in the process you do it
* Types of Bugs
  * Syntax Bugs
    * The code doesn't run (missing brackets, misspellings, etc.)
    * Linters help minimize syntax bugs
  * Programming Bugs
    * The code runs, but it doesn't do what you want
    * Happy path bugs (fundamental logic flaw) vs. Edge cases/Exception handling
    * TDD/BDD helps minimize programming bugs ([here's an alternate view on writing software test-first](http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html))
  * Requirements
    * The code does what the developer wants, but not what the user wants
    * Lean/Agile approaches help minimize miscommunication (fast feedback)
* Thinking About Bugs
  * When do you find bugs?
    * When you're planning the code
    * As you're writing the code
    * When the code is going through QA
    * When the code is in production
  * Define the problem, the whole problem, and nothing but the problem
    * Don’t try to solve the problem until you’ve defined it
    * First, clearly define unwanted behavior vs. desired behavior
    * Then, reproduce the error reliably
    * Then, clearly define the code path(s) causing the problem
    * Finally, repair the problem and compare before/after
    * Iterate as needed
  * A bug or a colony?
    * Real bugs often involve multiple errors
    * Solving one bug sometimes reveals a different bug that was being hidden
    * Example: A JavaScript/jQuery bug prevents different billing address from being submitted; repairing that bug reveals a different bug in the API when the billing address is submitted.
  * Clarify & Verify Assumptions
    * You have to make some assumptions in order to get started
    * Bring them into awareness and question them
    * What are some examples of assumptions?
  * Pitfalls
    * Distraction
      * If you find a colony of bugs, stay focused unless a secondary bug is blocking progress
    * Not reproducing a bug before "repairing" it
      * If you can't reproduce the bug accurately, you won't know if you've repaired it
      * Be mindful of differences in code version or environment
    * Estimating the time required to repair a bug is especially difficult
* Communicating About Bugs
  * Learn how to translate what the user reports into a useful document
    * [The website is down](http://www.thewebsiteisdown.com/)
  * Clear, complete, precise bug reports
    * Screenshot(s) with URL bar showing (or at least the full URL)
    * Username
    * Browser / type of device
    * Exact steps taken (described so that developer can replicate the process; include inputs)
    * What user expected vs. what user got
* Tools for Debugging JavaScript
  * Generic Debugging Toolbox (applicable to all programming languages)
    * Mental library of common bugs (this grows with time & practice)
    * [Rubber ducking](http://www.rubberduckdebugging.com/)
    * Code reviews
    * Visibility into the code execution (logs, debugger)
    * Bisecting
      * Cut the problem in half, and then again until you zero in on the exact problem
      * Sometimes slower than guessing where the bug is, but it will give you better, faster results on average
  * [Chrome Developer Tools](https://developer.chrome.com/devtools/docs/javascript-debugging)
    * Open with Cmd-Opt-I
    * Search all sources with Cmd-Opt-F
    * Console
      * console.log()
      * console.warn()
      * console.error()
      * console.info()
      * console.group() / console.groupEnd()
    * Breakpoints
      * Simple breakpoint
      * Step over
      * Step in
      * Continue
      * Conditional breakpoint
    * The Call Stack

Code samples are adapted from *[JavaScript & jQuery](http://javascriptbook.com/)* by Jon Duckett, available from [Powell's](http://www.powells.com/book/javascript-jquery-interactive-front-end-development-9781118531648/62-0), [Amazon](http://smile.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_1?ie=UTF8&qid=1461518301&sr=8-1&keywords=javascript+and+jquery+duckett), [etc.](https://www.google.com/?gws_rd=ssl#q=javascript+and+jquery+jon+duckett)
