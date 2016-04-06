The user selects a book by-

1. browsing an existing catalog of novels (free/open source content from Project Gutenberg and other sources), or

2. uploading content of their own (which they legally own).

The user then sets up an subscription. Options include-

1. Which days of the week?

2. What time of day?

3. What length of a snippet? (Short, Medium, Long).

The snippet is delivered to the user's inbox.

## Expected challenges

* storing books online

* validating book uploads

* parsing book files

* email service

## Goals

* Functional programming ([ramda?](http://ramdajs.com/0.20.0/index.html)) and TDD ([TAPE?](https://github.com/substack/tape))

* Front end/Headless Testing. Phantom.js?

* oauth/integrate with GoodReads for Reviews/Rating

* Subscriptions include 'Invite friend to...' option for serial book clubs

* node/express Postgres SQL backend, separately deployed

* Angular/Foundation frontend

* Full CRUD user accounts, 'my books', 'my subscriptions'

## Future Features

* Read online

* 'Discuss this snippet' comment feature. Public, or post to group page

* bookclub book pages, with Book threads, and _installment_sub-threads

## Credits

* Very much inspired by, and a fork of, [DailyLit](https://www.dailylit.com/).

## Unsorted wordvomit

* sort and search by-
  
  * author

  * genre

  * title

  * rating (goodreads?)

  * date added?
