[![Stories in Ready](https://badge.waffle.io/chrisman/quickreads.png?label=ready&title=Ready)](https://waffle.io/chrisman/quickreads) [![Build Status](https://travis-ci.org/chrisman/quickreads.svg?branch=master)](https://travis-ci.org/chrisman/quickreads)
# Quickreads #

Read a book by email, delivered daily in bite-sized installments.

## Problem

I wish I read more books. I don't seem to have enough time.

## Solution

A novel email subscription service which serializes novels.

It won't create more time for you. But it might help you realize the usefulness of time that you aren't taking full advantage of.

__How it works__

1. Select a book from the catalog, or upload one you own.

2. Select how often (which days) you want it to be delivered, and how long your installment should be. (10 - 30 minutes) 

3. Get emails, and read books.

__Why is this better?__ 

1. *The ubiquity of email.* I check my email first thing in the morning. If I'm waiting in line, I check my email. On the bus. During commute. It's a blessing and a curse, and we all do it.

2. *Prevent context switching.* If I want to read a book, I have to go FIND my book and then read it. Even the far superior Kindle/eReader device requires you to stop what you're doing and go get your Kindle. If you're *in your email* and are given an installment of the novel you're reading, then you can read it *without changing what you're doing.*

  Context switching is anti-productive, and, incidentally, is one of the reasons I gave up using Atom, Sublime Text, etc, in favor of vim in the terminal with tmux. I could no longer stomach context switching to check my logs or to restart a server. Now, I never leave the terminal, and the world is just a better place for it.

## Where can I get it?

__It's deployed__

* [http://quickreads.firebaseapp.com](http://quickreads.firebaseapp.com)

__Roll your own__

1. clone, or fork & clone.

2. `npm install`

3. run the migrations and `npm start` to start the backend

4. serve `public`. I'm using `http-server public -c-1 -o --cors -p 3474` for development.

## How can I help?

Thank you *so* much for asking! I can tell you're just a swell person and I look forward to our correspondance.

1. [Raise an issue](https://github.com/chrisman/quickreads/issues).

2. Fix an issue and [submit a pull request](https://github.com/chrisman/quickreads/pulls).

## Technical notes

It's a NEAP app. Node/Express, Angular, Postgres. epub.js and nodemailer and node-cron help out with server side stuff. So do knex and bookshelf and jsonwebtoken and bcrypt. Front end includes ui-router and bootstrap. I tried out TAPE for the first time and Travis CI for the first time on this project.

## Links

* Definitely inspired by and very much a clone of [DailyLit](https://www.dailylit.com/)
