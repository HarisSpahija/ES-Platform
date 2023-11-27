# ES-Platform

This project is created to simulate how a user would calculate their electricity costs based on a couple of inputs

Some important choices I made can be found below

## Choosing Vite over Create-React-App

Comming from Vue world I have worked with Vite over the past 4 years, I have enjoyed the flexibility but also the crazy speeds the HMR provides

## Configuring prettier in combination with eslint

I personally dislike working on a project where individuals employ varying tab indices, quote styles, or, in general, different (suboptimal) formatting. This complexity makes code reviews more challenging and adds unnecessary bloat to the entire environment. When multiple people collaborate on the same project, it is essential that they adhere to consistent coding practices. It becomes simpler to implement and assimilate new rules when the codebase follows a similar syntax.

## Choosing to use a day picker

From a UX perspective, it may seem counterintuitive for users to manually pick a specific date when calculating costs. A more logical approach might be, for instance, "I want to calculate the cost for this Sunday, so I'll select a date." However, providing users with numerous choices for selecting a time frame can be overwhelming and might divert them from their intended goal. Guiding users toward their desired result is often more effective. Calculating costs on a daily basis not only simplifies the user's understanding but also eliminates the need to navigate through a large calendar. This approach communicates that the cost fluctuates on a daily basis, providing a clearer indication compared to a weekly variation.

## Not having a calculate button

Providing instant feedback is often optimal in user experience design. Why conceal information that is readily available? By eliminating the "calculate" button, users are encouraged to explore and experiment. This interactive approach increases the likelihood that users will discover insights such as, "If I use power for a longer duration, it becomes more cost-effective as I am no longer purchasing during peak hours." This design not only facilitates immediate user understanding but also lays the groundwork for future enhancements. Implementing live data updates through a WebSocket, for instance, could enable users to view real-time estimates of their costs, enhancing the overall user experience.

## Not having interval calculations

Even though it's part of the assignment, I have purposefully left it out. I strongly believe that obtaining readings and maintaining them in the frontend will cause significant issues later on.

The problems can be broken apart like this:

The user will have to initiate a measurement session. Using a Single Page Application (SPA) or any tool without database access will require the user to keep their PC/browser running continuously to receive measurements.

What happens to past measurements? Wouldn't a user want to track their usage on a graph throughout the year? Establishing a connection using a websocket or stream to a gateway will add an extra layer of complexity and shared sources of truth between the frontend and backend.

To utilize the data for electricity companies, it would make more sense to save a copy of this data. Having a database allows the Energy Supplier Platform to target users for marketing campaigns and assist in reducing electricity usage.

It would make more sense for a user to access the data of all their measurements at any time. A simple database table with the following structure:

```
{
    id: /* ID of the device */,
    user_id: /* ID of the client */,
    timeStamp: /* Date of the measurement, potentially using a one-to-many relationship to a separate measurement table */,
    reading: /* Reading at that moment */
}
```

This allows us to gather more data for the user to make better-informed decisions. If data capacity is an issue, allowing the user to manually activate a measurement would already be helpful. However, storing readings in the browser or tracking them is far from ideal.

If this task were requested by the client, I would attempt to persuade them to consider a different option. Setting up this backend service is not overly difficult and will offload a significant amount of logic to the frontend. The frontend should be straightforward and perform simple tasks; that's where it excels.

# Architecture

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Material UI

This appeared to be the quickest approach as I have some experience with Material UI. Typically, I would opt for a similar library like Quasar for Vue or Styled Components for larger projects. I am not very familiar with Tailwind, as I have not adhered to the Bootstrap approach of utilizing classes for styling in most of my code. I prefer to directly observe what is causing shifts in my layout and styling, or at the other extreme, see nothing, as Material UI uses. Something in between is confusing to me, but this could also be due to a lack of experience using tools like this.
