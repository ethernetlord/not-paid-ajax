## Client did not pay and you've lost access to his website?


Add opacity to the body tag and decrease it every day until their site completely fades away. Set a due date and customize the number of days you offer them until the website is fully vanished.  
You can control the due date and the number of days freely from your server and even stop the fading away completely.


```not-paid.php
// Change or add any values to this array for as many sites you wish
// Or even replace it with something completely different, such as a database hook
$sites = array(
  'www.example2.com' => array(
    'due_date' => '2019-11-05',
    'days_deadline' => 10,
    'stop' => FALSE
  )
);
```

## Usage
Load the not-paid.js file in ```<head>``` tag and change the ```site``` variable on line 2 to match the values in the not-paid.php file.

## Authors
- Inspired from Twitter (@riklomas)  
- Original made by Ciprian (@kleampa), Romania  
- Forked by ethernetlord (@ethernetlord)  

## Disclaimer
This script might be on the edge of legality (or even completely illegal) in some countries. Use it with caution. I don't take responsibility for any damage caused by this script; it was created as a joke.
