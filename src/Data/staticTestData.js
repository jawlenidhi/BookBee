import book1 from '../Images/bookread1.jpg';
import book2 from '../Images/readbook2.jpg';
import book3 from '../Images/bookread2.jpg';
import book4 from '../Images/bookread3.jpg';
import book5 from '../Images/bookread4.jpg';
import book6 from '../Images/bookread5.jpg';
import book7 from '../Images/bookread6.jpg';
import book8 from '../Images/bookread7.jpg';
import book9 from '../Images/bookread8.jpg';
import book10 from '../Images/bookread9.jpg';

//Adventure categories
import book11 from '../Images/bookread11.jpg';
import book12 from '../Images/bookread12.jpg';
import book13 from '../Images/bookread13.jpg';
import book14 from '../Images/bookread14.jpg';
import book15 from '../Images/bookread15.jpg';
import book16 from '../Images/bookread16.jpg';
import book17 from '../Images/bookread17.jpg';

//Mystery categories
import book18 from '../Images/bookread18.jpg';
import book19 from '../Images/bookread19.jpg';
import book20 from '../Images/bookread20.jpg';
import book21 from '../Images/bookread21.jpg';
import book22 from '../Images/bookread22.jpg';
import book23 from '../Images/bookread23.jpg';
import book24 from '../Images/bookread24.jpg';

//Thriller categories
import book25 from '../Images/bookread25.jpg';
import book26 from '../Images/bookread26.jpg';
import book27 from '../Images/bookread27.jpg';
import book28 from '../Images/bookread28.jpg';
import book29 from '../Images/bookread29.jpg';
import book30 from '../Images/bookread30.jpg';
import book31 from '../Images/bookread31.jpg';

//Romance categories
import book32 from '../Images/bookread32.jpg';
import book33 from '../Images/bookread33.jpg';
import book34 from '../Images/bookread34.jpg';
import book35 from '../Images/bookread35.jpg';
import book36 from '../Images/bookread36.jpg';
import book37 from '../Images/bookread37.jpg';
import book38 from '../Images/bookread38.jpg';

const arrayOfBooks = [{
        id: 1,
        title: 'Tom Sawyer',
        author: 'Mark Twain',
        image: book1,
        readLink: "https://drive.google.com/file/d/1NwcV4ZZljcyPtqzUGie0RunFf02mcc0o/preview",
        downloadLink: "https://drive.google.com/file/d/1NwcV4ZZljcyPtqzUGie0RunFf02mcc0o/view",
        genre: "Adventure",
        description: "The Adventures of Tom Sawyer is an 1876 novel by Mark Twain about a boy growing up along the Mississippi River. It is set in the 1840s in the town of St. Petersburg, which is based on Hannibal, Missouri, where Twain lived as a boy. "
    },
    {
        id: 2,
        title: 'Agni Veena',
        author: 'Kazi Nazrul Islam',
        image: book2,
        readLink: "https://drive.google.com/file/d/14woN5DwovkxLrpm4DR1q4hbekzLCKZqb/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/14woN5DwovkxLrpm4DR1q4hbekzLCKZqb/view?usp=sharing",
        genre: "Mystery",
        description: "Agnibeena is the first poetry book written by Kazi Nazrul Islam, one of the most famous Bengali poet of the first half of the twentieth century. It was published in the month of Kartik, the Bengali year 1329. There are twelve poems in this book. "
    },
    {
        id: 3,
        title: 'Animal Farm',
        author: 'George Orwell',
        image: book3,
        readLink: "https://drive.google.com/file/d/1LSwsU5Dr3YtkV4ogXlpS4Wt7tSHhKLZe/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1LSwsU5Dr3YtkV4ogXlpS4Wt7tSHhKLZe/view?usp=sharing",
        genre: "Fantasy",
        description: "Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy."
    },
    {
        id: 4,
        title: 'Ben Hur',
        author: 'Lewis Wallace',
        image: book4,
        readLink: "https://drive.google.com/file/d/1Jr_wYJnBtvJUsePrO0Q9Wi3-OfvHOZ9g/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1Jr_wYJnBtvJUsePrO0Q9Wi3-OfvHOZ9g/view?usp=sharing",
        genre: "Mystery",
        description: "Ben-Hur: A Tale of the Christ is a novel by Lew Wallace, published by Harper and Brothers on November 12, 1880, and considered the most influential Christian book of the nineteenth century. It became a best-selling American novel, surpassing Harriet Beecher Stowe's Uncle Tom's Cabin in sales."
    },
    {
        id: 5,
        title: 'Baburnama',
        author: 'Babur',
        image: book5,
        readLink: "https://drive.google.com/file/d/1rp36pcnpbiAJ_6DfxhURMqZpeEIrkdBt/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1rp36pcnpbiAJ_6DfxhURMqZpeEIrkdBt/view?usp=sharing",
        genre: "Adventure",
        description: "The Bāburnāma is the memoirs of Ẓahīr-ud-Dīn Muhammad Bābur, founder of the Mughal Empire and a great-great-great-grandson of Timur. It is written in the Chagatai language, known to Babur as Türki Turkic, the spoken language of the Andijan-Timurids."
    },
    {
        id: 6,
        title: 'Arthashastra',
        author: 'Kautilya',
        image: book6,
        readLink: "https://drive.google.com/file/d/19h3Z2SOnM4hEIaRk4Kco3xnieHqG8KaU/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/19h3Z2SOnM4hEIaRk4Kco3xnieHqG8KaU/view?usp=sharing",
        genre: "The Arthashastra is an ancient Indian Sanskrit treatise on statecraft, economic policy and military strategy. Kautilya, also identified as Vishnugupta and Chanakya, is traditionally credited as the author of the text. The latter was a scholar at Takshashila, the teacher and guardian of Emperor Chandragupta",

    },
    {
        id: 7,
        title: 'Mein Kampf',
        author: 'Adolf Hitler',
        image: book7,
        readLink: "https://drive.google.com/file/d/1NwcV4ZZljcyPtqzUGie0RunFf02mcc0o/preview",
        downloadLink: "https://drive.google.com/file/d/1NwcV4ZZljcyPtqzUGie0RunFf02mcc0o/view",
        genre: "Auto-Biography",
        description: "Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926. "
    },
    {
        id: 8,
        title: 'Time Machine',
        author: 'H.G Wells',
        image: book8,
        readLink: "https://drive.google.com/file/d/14woN5DwovkxLrpm4DR1q4hbekzLCKZqb/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/14woN5DwovkxLrpm4DR1q4hbekzLCKZqb/view?usp=sharing",
        genre: "Adventure",
        description: "The Time Machine is a science fiction novella by H. G. Wells, published in 1895. The work is generally credited with the popularization of the concept of time travel by using a vehicle or device to travel purposely and selectively forward or backward through time."
    },
    {
        id: 9,
        title: 'Utopia',
        author: 'Thomas Moore',
        image: book9,
        readLink: "https://drive.google.com/file/d/1YtHv71isresFWc6LT2ZsIuQYgFOu70DM/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1YtHv71isresFWc6LT2ZsIuQYgFOu70DM/view?usp=sharing",
        genre: "Fantasy",
        description: "Utopia is a work of fiction and socio-political satire by Thomas More, written in Latin and published in 1516. The book is a frame narrative primarily depicting a fictional island society and its religious, social, and political customs. "
    },
    {
        id: 10,
        title: 'Chitra',
        author: 'Rabindranath Tagore',
        image: book10,
        readLink: "https://drive.google.com/file/d/1iIsD6Sb8oGY0A90RZz3bb8tlDkw6m3HD/preview?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1iIsD6Sb8oGY0A90RZz3bb8tlDkw6m3HD/view?usp=sharing",
        genre: "Mystery",
        description: "Chitra is a one-act play written by Rabindranath Tagore, first published in English in 1913 by the India Society of London. The play adapts part of the story from the Mahabharata and centers upon the character of Chitrangada, a female warrior who tries to attract the attention of Arjuna."
    },


    //------------Adventure---------

    {
        id: 11,
        title: 'Catriona',
        author: 'Robert louis stevenson',
        image: book11,
        readLink: "https://drive.google.com/file/d/1XVUPraYNPNe2x4j004tc4iaRocrIT_ZW/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1XVUPraYNPNe2x4j004tc4iaRocrIT_ZW/view?usp=sharing",
        genre: "Adventure",
        description: "It was a great book"
    },
    {
        id: 12,
        title: 'Kidnapped',
        author: 'Robert louis stevenson',
        image: book12,
        readLink: "https://drive.google.com/file/d/1SI2bTfFNrTK-vL4-ZjwmvFhP0FzW9tIL/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1SI2bTfFNrTK-vL4-ZjwmvFhP0FzW9tIL/view?usp=sharing",
        genre: "Adventure",
        description: "It was a great book"
    },
    {
        id: 13,
        title: 'The adventures of tom sawyer',
        author: 'Mark twain',
        image: book13,
        readLink: "https://drive.google.com/file/d/192Bt8J0D60Rfn5s88uSfv4xcrHCfkZpG/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/192Bt8J0D60Rfn5s88uSfv4xcrHCfkZpG/view?usp=sharing",
        genre: "Adventure",
        description: "It was a great book"
    },
    {
        id: 14,
        title: 'The call of wild',
        author: 'Jack london',
        image: book14,
        readLink: "https://drive.google.com/file/d/1tGlZqTHuMwODqJIqqJIsa47-WSnsgvOG/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1tGlZqTHuMwODqJIqqJIsa47-WSnsgvOG/view?usp=sharing",
        genre: "Adventure",
        description: "It was a great book"
    },
    {
        id: 15,
        title: 'The journey to the center of the earth',
        author: 'Jules verne',
        image: book15,
        readLink: "https://drive.google.com/file/d/1feavdubz_LTyL_rnyrFoZ7a6X-mnZDE9/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1feavdubz_LTyL_rnyrFoZ7a6X-mnZDE9/view?usp=sharing",
        genre: "Adventure",
        description: "It was a great book"
    },
    {
        id: 16,
        title: 'The lost hero',
        author: 'Rick riordan',
        image: book16,
        readLink: "https://drive.google.com/file/d/19Gb4_P0cY1LPiMNagaIYoDsNl0tM3ndk/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/19Gb4_P0cY1LPiMNagaIYoDsNl0tM3ndk/view?usp=sharing",
        genre: "Adventure",
        description: "It was a great book"
    },
    {
        id: 17,
        title: 'Twenty thousand leagues under the sea',
        author: 'Jules verne',
        image: book17,
        readLink: "https://drive.google.com/file/d/15FP5EzEriVrM9xJOVit3ON8koXyo5biG/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/15FP5EzEriVrM9xJOVit3ON8koXyo5biG/view?usp=sharing",
        genre: "Adventure",
        description: "It was a great book"
    },


    //------------Mystery---------------

    {
        id: 18,
        title: 'black house',
        author: 'stephen king and Peter stroub',
        image: book18,
        readLink: "https://drive.google.com/file/d/1bFdo1EupHH1jrE6nB2Er7FgQOI0uTISc/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1bFdo1EupHH1jrE6nB2Er7FgQOI0uTISc/view?usp=sharing",
        genre: "Mystery",
        description: "It was a great book"
    },
    {
        id: 19,
        title: 'Crime and Punishment',
        author: 'Fyodor dostoyevsky',
        image: book19,
        readLink: "https://drive.google.com/file/d/1qS76ILKMzOJQRbaXHkrup2m4Izt56YdO/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1qS76ILKMzOJQRbaXHkrup2m4Izt56YdO/view?usp=sharing",
        genre: "Mystery",
        description: "It was a great book"
    },
    {
        id: 20,
        title: 'Madame Midas',
        author: 'Fergus Hume',
        image: book20,
        readLink: "https://drive.google.com/file/d/1-0IZz6kh3bE4tybYS-4L2oZi3TB2fjx_/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1-0IZz6kh3bE4tybYS-4L2oZi3TB2fjx_/view?usp=sharing",
        genre: "Fantasy",
        description: "It was a great book"
    },
    {
        id: 21,
        title: 'The mysteries of udolpho',
        author: 'Ann radecliffe',
        image: book21,
        readLink: "https://drive.google.com/file/d/1yFyNQto8OFvwiH7ira5Lphic9g_ZrQT2/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1yFyNQto8OFvwiH7ira5Lphic9g_ZrQT2/view?usp=sharing",
        genre: "Mystery",
        description: "It was a great book"
    },
    {
        id: 22,
        title: 'The secret adversary',
        author: 'Agatha christie',
        image: book22,
        readLink: "https://drive.google.com/file/d/1CLQsKrz8XGW7UNY8d7qDrKkiTLhAuM_F/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1CLQsKrz8XGW7UNY8d7qDrKkiTLhAuM_F/view?usp=sharing",
        genre: "Mystery",
        description: "It was a great book"
    },
    {
        id: 23,
        title: 'The study in scarlet',
        author: 'Sir arthur canon doyle',
        image: book23,
        readLink: "https://drive.google.com/file/d/11BxhwshV9v2dTlfvVZxf3EYFVIjJmyI7/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/11BxhwshV9v2dTlfvVZxf3EYFVIjJmyI7/view?usp=sharing",
        genre: "Mystery",
        description: "It was a great book"
    },
    {
        id: 24,
        title: 'The vampyre',
        author: 'Polidori john',
        image: book24,
        readLink: "https://drive.google.com/file/d/1ixyPIzbolUvhwo4Yk8ybGPL109TOJadn/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1ixyPIzbolUvhwo4Yk8ybGPL109TOJadn/view?usp=sharing",
        genre: "Mystery",
        description: "It was a great book"
    },


    //-------------Thriller----------


    {
        id: 25,
        title: 'Carmilla',
        author: 'J. sheridan lefanu',
        image: book25,
        readLink: "https://drive.google.com/file/d/1ZWaL_DTfiUT9vdBkG50yBrMx9z8XhUFd/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1ZWaL_DTfiUT9vdBkG50yBrMx9z8XhUFd/view?usp=sharing",
        genre: "Fantasy",
        description: "It was a great book"
    },
    {
        id: 26,
        title: 'Dracula',
        author: 'Bram stoker',
        image: book26,
        readLink: "https://drive.google.com/file/d/1z4_7CPzB6hrJCwhjOJNocI1bUqODeeKh/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1z4_7CPzB6hrJCwhjOJNocI1bUqODeeKh/view?usp=sharing",
        genre: "Thriller",
        description: "It was a great book"
    },
    {
        id: 27,
        title: 'Northenger Abbey',
        author: 'Jane austen',
        image: book27,
        readLink: "https://drive.google.com/file/d/1ZJlt6PoLK8UnUKdoZ2PCQp85PR2F7qFp/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1ZJlt6PoLK8UnUKdoZ2PCQp85PR2F7qFp/view?usp=sharing",
        genre: "Fantasy",
        description: "It was a great book"
    },
    {
        id: 28,
        title: 'The devil elexir',
        author: 'E.T.A. Hoffman',
        image: book28,
        readLink: "https://drive.google.com/file/d/1VgN1RIhNjh3hb54f_DtlpVgkJ0TANCn3/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1VgN1RIhNjh3hb54f_DtlpVgkJ0TANCn3/view?usp=sharing",
        genre: "Thriller",
        description: "It was a great book"
    },
    {
        id: 29,
        title: 'The last man',
        author: 'Mary shelley',
        image: book29,
        readLink: "https://drive.google.com/file/d/1C3o6zDENoCCcEhPBhEzdpky9quKht1Ev/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1C3o6zDENoCCcEhPBhEzdpky9quKht1Ev/view?usp=sharing",
        genre: "Thriller",
        description: "It was a great book"
    },
    {
        id: 30,
        title: 'The metamorphosis',
        author: 'Franz kafka',
        image: book30,
        readLink: "https://drive.google.com/file/d/1h55YJUEWWExgG0lPOV_DQ6VK_U6K4n4L/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1h55YJUEWWExgG0lPOV_DQ6VK_U6K4n4L/view?usp=sharing",
        genre: "Thriller",
        description: "It was a great book"
    },
    {
        id: 31,
        title: 'The riddle of the sands',
        author: 'Erskine childers',
        image: book31,
        readLink: "https://drive.google.com/file/d/16blf7t-7yjHxqtbaAI8RtnpI-xBuaO-G/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/16blf7t-7yjHxqtbaAI8RtnpI-xBuaO-G/view?usp=sharing",
        genre: "Thriller",
        description: "It was a great book"
    },

    //---------------Romance--------------
    {
        id: 32,
        title: 'The room with a view',
        author: 'E.M. forster',
        image: book32,
        readLink: "https://drive.google.com/file/d/1WS_3G__7o_5BsaDNrjE5Oyn7suIzTWcW/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1WS_3G__7o_5BsaDNrjE5Oyn7suIzTWcW/view?usp=sharing",
        genre: "Romance",
        description: "A Room with a View is a 1908 novel by English writer E. M. Forster, about a young woman in the restrained culture of Edwardian era England. Set in Italy and England, the story is both a romance and a humorous critique of English society at the beginning of the 20th century."
    },
    {
        id: 33,
        title: 'Anna karenina',
        author: 'Leo tolstoy',
        image: book33,
        readLink: "https://drive.google.com/file/d/10H01W3rXWEddef_c66o32N20MrAR20Vk/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/10H01W3rXWEddef_c66o32N20MrAR20Vk/view?usp=sharing",
        genre: "Romance",
        description: "Anna Karenina is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Many writers consider it to be one of the greatest works of literature ever written, and Tolstoy himself called it his first true novel. "
    },
    {
        id: 34,
        title: 'Emma',
        author: 'Jane Austen',
        image: book34,
        readLink: "https://drive.google.com/file/d/1cJG0gh4aPljXVraed-5emmYPdwT8JyLk/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1cJG0gh4aPljXVraed-5emmYPdwT8JyLk/view?usp=sharing",
        genre: "Romance",
        description: "It was a great book"
    },
    {
        id: 35,
        title: 'Lady susan',
        author: 'Jane Austen',
        image: book35,
        readLink: "https://drive.google.com/file/d/1PnRUUW9FML56lo1zOxm5lEJ0ymAN3NCS/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1PnRUUW9FML56lo1zOxm5lEJ0ymAN3NCS/view?usp=sharing",
        genre: "Romance",
        description: "It was a great book"
    },
    {
        id: 36,
        title: 'Little women',
        author: 'Louise may alcott',
        image: book36,
        readLink: "https://drive.google.com/file/d/1gmq7XQZgzQBgw2n0W8OeKZM5Mz09w6TH/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1gmq7XQZgzQBgw2n0W8OeKZM5Mz09w6TH/view?usp=sharing",
        genre: "Romance",
        description: "It was a great book"
    },
    {
        id: 37,
        title: 'The lily of the valley',
        author: 'Mary martha sherwood',
        image: book37,
        readLink: "https://drive.google.com/file/d/1NUQgvzyliOus3xXA0ovc5ZpnuArcAgnh/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1NUQgvzyliOus3xXA0ovc5ZpnuArcAgnh/view?usp=sharing",
        genre: "Romance",
        description: "It was a great book"
    },
    {
        id: 38,
        title: 'The scarlet letter',
        author: 'Nathaniel hawthorne',
        image: book38,
        readLink: "https://drive.google.com/file/d/1J3YY8C9iuGb7PCz4g3a8b1vgcHeDFuDL/view?usp=sharing",
        downloadLink: "https://drive.google.com/file/d/1J3YY8C9iuGb7PCz4g3a8b1vgcHeDFuDL/view?usp=sharing",
        genre: "Romance",
        description: "It was a great book"
    },
]

export default arrayOfBooks;