[![Build Status](https://travis-ci.org/mycargus/detention.svg?branch=master)](https://travis-ci.org/mycargus/detention)

# Detention

`Detention` aims to automatically diagnose and disable flaky tests. It also
creates issues or tickets (github, Jira, Trello, etc) for those flaky tests.
When the issue or ticket is closed, the test is enabled again.

This project defines code-as-infrastructure for a serverless HTTP service, and
provides runtime client libraries for test suites. Clone, deploy, install client
libraries in your test suites, and you're all set.

## The Problem

Why do we code tests? I code tests so that I can make changes to my code with
confidence that what I built actually works as expected and I haven't
accidentally broken something. If I can rely on my coded tests then I can
confidently ship my code.

Undeterministic tests, AKA flaky tests, yield different results for unknown
reasons. Flaky tests are unreliable tests. Unreliable tests provide zero value
and negatively impact products and engineers. If I cannot rely on my coded tests
then I cannot confidently ship my code.

So we set out to fix those flaky tests as quickly as possible. Managing flaky
tests can become a tedious chore, however, especially as test suites grow large.
Some businesses even have full-time engineers dedicated to culling flaky tests
from test suites: constantly monitoring builds, analyzing test results,
committing code to skip flaky tests, and creating issues or tickets. Meanwhile
other engineers repeatedly retrigger the builds, crossing their fingers for
green results.

Sound familiar?

If you don't trust your tests, why run them?

## A Solution

Let's automatically diagnose flaky tests and put them in detention till they
work reliably again.

```text

/--------------------------------------------\
| A test fails and passes on the same build. |
|                    ಠ_ಠ                     |
\--------------------------------------------/
                      ||
                      ||
                      \/
/--------------------------------------------\
| The build still passes. The test is put in |
| detention.  ヾ(＾∇＾)                       |
\--------------------------------------------/
                      ||
                      ||
                      \/
/--------------------------------------------\
| A Jira ticket, github issue, etc is        |
| created for the flaky test.                |
\--------------------------------------------/
                      ||
                      ||
                      \/
/--------------------------------------------\
| When the ticket or issue is closed, the    |
| flaky test is released from detention. It  |
| will run in builds again.  \o/             |
\--------------------------------------------/

```

## Setup and Installation

TODO

## Pro Tip

This project works especially well when combined with the [flakey_spec_catcher]
gem, which helps prevent flakey specs from sneaking into your test suites!

## Credit

This project was inspired by the [quarantine] gem.

[flakey_spec_catcher]: https://rubygems.org/gems/flakey_spec_catcher
[quarantine]: https://github.com/flexport/quarantine
