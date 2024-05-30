const complexObject = {
  user: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      postalCode: "12345",
      country: "USA",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    contacts: [
      {
        type: "phone",
        value: "123-456-7890",
        preferred: true,
      },
      {
        type: "email",
        value: "contact@johndoe.com",
        preferred: false,
      },
    ],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
      schedule: {
        start: "08:00",
        end: "22:00",
      },
    },
    privacy: {
      profileVisible: true,
      searchEngines: false,
      dataSharing: {
        partners: ["partner1", "partner2"],
        anonymized: true,
      },
    },
  },
  history: [
    {
      date: "2023-05-01",
      action: "login",
      details: {
        ip: "192.168.1.1",
        device: "desktop",
        browser: "Chrome",
      },
    },
    {
      date: "2023-05-02",
      action: "update_profile",
      details: {
        changes: [
          {
            field: "email",
            oldValue: "john.doe@example.com",
            newValue: "john.d.new@example.com",
          },
        ],
      },
    },
  ],
  subscriptions: [
    {
      id: 1,
      type: "newsletter",
      status: "active",
      preferences: {
        frequency: "weekly",
        categories: ["news", "updates"],
      },
    },
    {
      id: 2,
      type: "premium",
      status: "inactive",
      preferences: {
        billingCycle: "monthly",
        nextBillingDate: "2024-06-01",
      },
    },
  ],
  methods: {
    updateEmail: function (newEmail) {
      this.user.email = newEmail;
      console.log(`Email updated to: ${newEmail}`);
    },
    addContact: function (contact) {
      this.user.contacts.push(contact);
      console.log(`Contact added: ${JSON.stringify(contact)}`);
    },
    removeContact: function (type, value) {
      this.user.contacts = this.user.contacts.filter(
        (contact) => !(contact.type === type && contact.value === value)
      );
      console.log(`Contact removed: ${type}, ${value}`);
    },
  },
};

// Example usage:
complexObject.methods.updateEmail("new.email@example.com");
complexObject.methods.addContact({
  type: "phone",
  value: "987-654-3210",
  preferred: false,
});
complexObject.methods.removeContact("email", "contact@johndoe.com");

console.log(JSON.stringify(complexObject, null, 2));
