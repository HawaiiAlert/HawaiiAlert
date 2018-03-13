# HawaiiAlert
An app to improve on Hawaii's disaster alert systems

To install
1. [Install Meteor](https://www.meteor.com/install).
1. Download, or fork and clone, the repository to your computer.
1. Open a terminal and `cd` to the `app/` directory.
1. Run `meteor npm install`.
1. Run `meteor run`.
1. The app will be running at [localhost:3000](localhost:3000).

If you would like to change the set of options, the initial database can be found at `app/private/database/initial-collection-data.json`.
After making any changes to this file, please run `meteor reset` in the `app/` directory to clear out the previous database.

As `app/settings.json` and `app/private/database/initial-collection-data.json` contain sensitive information, it is recommended that you restrict read/write access to these files.
