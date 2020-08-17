![Build Status](https://img.shields.io/travis/mycargus/quarantined/master?color=green&logo=travis&style=for-the-badge)
![License](https://img.shields.io/github/license/mycargus/quarantined?color=blue&style=for-the-badge)

[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)

# Quarantined

_WIP!_

`Quarantined` aims to automatically diagnose, disable, and help you maintain
non-deterministic ("flaky") tests.

It also creates issues or tickets (github, Jira, Trello, etc) for those flaky
tests. When the issue or ticket is closed, the test is enabled again.

This project defines infrastructure-as-code for a serverless HTTP API service,
and provides runtime client libraries for test suites. Clone and deploy the
service, install client libraries in your test suites, and you're all set.

## The Problem

> "A test is non-deterministic when it passes sometimes and fails sometimes,
> without any noticeable change in the code, tests, or environment. Such tests
> fail, then you re-run them and they pass. Test failures for such tests are
> seemingly random." - Martin Fowler, Eradicating Non-Determinism in Tests

Fowler goes on to explain why non-deterministic tests are a problem, why you
should quarantine them, and how to ensure test reliability. We highly recommend
reading [the article].

Quarantining tests can become a tedious and time-consuming job, especially as
a test suite grows large. We propose an easier way to do it.

## A Solution

Let's automatically diagnose flaky tests and quarantine them until they work
reliably again. Here's how it works:

```text

/--------------------------------------------\
| A test fails and passes on the same build. |  <---\
|                    ಠ_ಠ                     |      |
\--------------------------------------------/      |
                      ||                            |
                      ||                            |
                      \/                            |
/--------------------------------------------\      |
| The build still passes. The test is        |      |
| quarantined. The team is notified. ヾ(＾∇＾)|      |
\--------------------------------------------/      |
                      ||                            |
                      ||                            |
                      \/                            |
/--------------------------------------------\      |
| A Jira ticket, github issue, etc is        |      |
| created for the flaky test.                |      |
\--------------------------------------------/      |
                      ||                            |
                      ||                            |
                      \/                            |
/--------------------------------------------\      |
| When the ticket or issue is closed, the    |      |
| test is released from quarantine. It will  |  ----/
| run in builds again.  \o/                  |
\--------------------------------------------/

```

## Setup

This is a monorepo for the Quarantined service and its client libraries. See
`service/README.md` and `clients/README.md` for setup instructions.

## Pro Tip

This project works especially well when combined with the [flakey_spec_catcher]
gem, which helps prevent flakey specs from sneaking into your test suites!

## Plans

- [x] Start the project
- [ ] Everything else ...
- [ ] Build a Ruby RSpec client gem
- [ ] Build a Node.js Jest client package
- [ ] Build a Node.js Mocha client package (or a single Nodejs package to which we add support for more test frameworks? )
- [ ] Add Jira tickets integration
- [ ] Add Github issues/PR integration
- [ ] Add Trello boards integration
- [ ] Automatically send a Slack or email or whatever notification when the number of flaky tests reaches a configurable threshold
- [ ] Periodically send a report about the flaky tests, their lifetime, number of resolved, number of new, etc

## Credit

This project was inspired by the [quarantine] gem.

[the article]: https://martinfowler.com/articles/nonDeterminism.html
[flakey_spec_catcher]: https://rubygems.org/gems/flakey_spec_catcher
[quarantine]: https://github.com/flexport/quarantine
