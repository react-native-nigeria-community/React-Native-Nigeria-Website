export const getAccordions = [
  {
    title: "Who can join the community?",
    content: {
      type: "text",
      value: "Anyone interested in React Native. Whether you're a beginner, student, or experienced developer, you are welcome to join.",
    },
  },
  {
    title: "Is membership free?",
    content: {
      type: "text",
      value: "Yes, joining the community is completely free. We believe in open knowledge sharing and collaboration.",
    },
  },
  {
    title: "Do I need prior experience with React Native?",
    content: {
      type: "text",
      value: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
    },
  },
  {
    title: "How do I get updates on events and activities?",
    content: {
      type: "jsx",
      value: () => (
        <p>
          Stay informed about our latest events and activities by{" "}
          <a
            href="https://reactnativenigeria.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            subscribing to our newsletter
          </a>
          ,{" "}
          <a
            href="https://reactnativenigeria.slack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            joining our Slack community
          </a>
          ,{" "}
          <a
            href="https://chat.whatsapp.com/Im8fCMmNaml96AMyOZG4mR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            participating in our WhatsApp group
          </a>
          , and following us on social media.
        </p>
      ),
    },
  },
  {
    title: "Can I showcase my React Native projects?",
    content: {
      type: "links",
      value: [
        {
          label: "Learn how to showcase your projects in our Community Contribution Guideline",
          url: "https://github.com/react-native-nigeria-community/React-Native-Nigeria-Community-Contribution-Guideline",
        },
      ],
    },
  },
];
