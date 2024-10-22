// Create a database called "contact":
// use contact
// Create a collection called "contactlist":
db.createCollection("contactlist")
// Insert Documents into "contactlist"
db.contactlist.insertMany([
    { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
    { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
    { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { lastName: "Alex", firstName: "brown", age: 4 },
    { lastName: "Denzel", firstName: "Washington", age: 3 }
 ])
//  Display All of the Contacts List
db.contactlist.find()
// Display all the information about only one person using his ID.
db.contactlist.find({ _id: ObjectId("6717e43249cf786f030b70c7") })
// Display All Contacts with Age Greater than 18
db.contactlist.find({ age: { $gt: 18 } })
// Change the Contact's First Name from "Kefi Seif" to "Kefi Anis"
db.contactlist.updateOne(
    { firstName: "Seif", lastName: "Kefi" },
    { $set: { firstName: "Kefi Anis" } }
 )
// Delete Contacts Aged Under 5
db.contactlist.deleteMany({ age: { $lt: 5 } })
// Display All of the Contacts List Again
db.contactlist.find()


