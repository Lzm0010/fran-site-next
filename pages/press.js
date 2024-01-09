import Head from 'next/head'
import PressCard from '../components/PressCard/PressCard'
import ReviewCard from '../components/ReviewCard/ReviewCard'
import styles from '../styles/press.module.scss'
import franPress1 from '../public/franPress1.jpeg'
import franPress2 from '../public/franPress2.jpeg'
import franPress3 from '../public/franPress3.jpeg'
import franPress4 from '../public/franPress4.jpeg'
import franPress5 from '../public/franPress5.webp'
import franPress6 from '../public/franPress6.jpg'
import franReviews1 from '../public/franReviews1.jpeg'
import franReviews2 from '../public/franReviews2.jpeg'
import franReviews3 from '../public/franReviews3.jpeg'
import franReviews4 from '../public/franPhoto19.jpeg'
import franReviews5 from '../public/franPhoto8.jpeg'

export default function Press() {
    return  (
        <div className={styles.container}>
            <Head>
                <title>Francesca Press</title>
                <meta name="description" content="Francesca Barker McCormick Press and Reviews" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <main className={styles.main}>
                <div className={styles.pressContainer}>
                        <div className={styles.pressTitleContainer}> 
                            <div className={styles.pressTitleInnerContainer}>
                                <div className={styles.pressTitle}>
                                    <h4 className={styles.pressText}>Press</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.innerContainer}>
                            <div className={styles.pressCard}>
                                <PressCard link='https://deadline.com/2024/01/lifetime-movie-net-first-quarter-featuring-vivica-fox-tom-sandoval-1235694641/' img={franPress6} title="Deadline" subtitle="Lifetime Movie Net Releases Q1 Movie Slate"/>
                            </div>
                            <div className={styles.pressCard}>
                                <PressCard link='https://beatricemag.com/culture/in-conversation-with-actress-francesca-barker-mccormick/#google_vignette' img={franPress5} title="Beatrice" subtitle="In Conversation With Actress Francesca Barker McCormick"/>
                            </div>
                            <div className={styles.pressCard}>
                                <PressCard link='https://www.naludamagazine.com/interview-with-actress-francesca-barker-mccormick/' img={franPress4} title="Naluda Magazine" subtitle="Interview with Actress Francesca Barker McCormick"/>
                            </div>
                            <div className={styles.pressCard}>
                                <PressCard link='https://medium.com/authority-magazine/inspirational-women-in-hollywood-how-actress-francesca-barker-mccormick-is-helping-to-shake-up-the-8799b205170f' img={franPress1} title="Authority Magazine" subtitle="Inspirational Women In Hollywood: How Actress Francesca Barker McCormick Is Helping To Shake Up The Entertainment Industry"/>
                            </div>
                            <div className={styles.pressCard}>
                                <PressCard link='https://www.art-insider.com/meet-actress-francesca-barker-mccormick/3646' img={franPress2} title="The Art Insider" subtitle="Meet Actress Francesca Barker McCormick"/>
                            </div>
                            <div className={styles.pressCard}>
                                <PressCard link='https://www.vogue.com/slideshow/a-beach-wedding-with-zoom-guests-from-as-far-away-as-kazakhstan' img={franPress3} title="Vogue" subtitle="A Beach Wedding Ceremony With Zoom Guests From as Far Away as Kazakhstan"/>
                            </div>
                        </div>
                        <div className={styles.pressTitleContainer}> 
                            <div className={styles.pressTitleInnerContainer}>
                                <div className={styles.pressTitle}>
                                    <h4 className={styles.pressText}>Reviews</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.innerReviewsContainer}>
                            <div className={styles.reviewCard}>
                                <ReviewCard reviewer="Rebecca Demeter" img={franReviews1} title="Happiness is an Illusion" review="Working with Francesca on my short film was a wonderful experience.
                                    She was so collaborative and receptive to different ways to approach a very tough scene
                                    about her character that had just had an abortion. She came ready to work and gave it
                                    her all on every single take. Her layered, nuanced acting showed strength and courage,
                                    and I couldn't have asked for a better performance."/>
                            </div>
                            <div className={styles.reviewCard}>
                                <ReviewCard reviewer="Aquila Chase-Daniel" img={franReviews5} title="That's Enough Now Thanks" review="I have been writing and directing short films for eight years.
                                    I have worked with professional actors in both New Mexico and California.
                                    I recently finished shooting That’s Enough Now Thanks and had the pleasure of
                                    working with Francesca Barker McCormick as our secondary lead.
                                    During photography I quickly noticed Francesca had a well honed tool kit of
                                    technical skills along with an innate acting ability. She came well prepared for
                                    each scene, with a clear grasp of tone and substance. I was imminently
                                    impressed. Her performance on-screen is engaging and energized, and remains
                                    consistently terrific even at the end of a long day of shooting.
                                    She was a joy to work with, meeting our small production with enthusiasm and
                                    creativity. Her on set presence is calm, collected and dedicated. I highly
                                    recommend you consider casting Francesca in any upcoming projects!"/>
                            </div>
                            <div className={styles.reviewCard}>
                                <ReviewCard reviewer="Marvalee Peart" img={franReviews2} title="Skylife" review="You think it is a given but the fact that Francesca knew her
                                    lines inside and out, where I was not distracted by an actor
                                    searching for his/her lines or stumbling over words… I was
                                    simply focused on the performance and thinking to myself ‘this
                                    actress captures the essence of the character’s
                                    eloquence/frustration and emotional bandwidth’. I kept
                                    watching the screen for any signs of dishonesty in the
                                    performance but I could find none. An actor gets a few seconds
                                    or a few minutes to showcase his/her ability to
                                    deliver…preparation /performance dictates the former or the
                                    latter.
                                    As a writer who spends an enormous amount of time developing
                                    characters and their stories, I work very hard building the
                                    ideal cast. It takes me more time than most to find the ideal
                                    talent only because I know my characters so well and the world
                                    in which they live. What I see and hear in my head is not
                                    always easy to match beyond my imagination. You want talent
                                    that can deliver. Talent who will put in the work. Not
                                    everyone is willing to do that.
                                    I am extremely satisfied and pleased with the cast assembled
                                    for SKYLIFE - ‘Heroes and Heroines’ (proof of concept). When
                                    an actor is right for a role, when research and rehearsals are
                                    fully explored… it makes for a much smoother production and
                                    authentic performance. 
                                    It was evident Francesca understood the essence of Ashley, her
                                    inner and outer struggles… Francesca made it effortless. It
                                    was a pleasure to watch Francesca bring this character to
                                    life." />
                            </div>
                            <div className={styles.reviewCard}>
                                <ReviewCard reviewer="Joe Bridgewood & Emily Blake Anderson" img={franReviews3} title="How to Find Love In A Pandemic" review="Francesca is a joy to work with! Her eagerness to dive into
                                    the work, the character development she brought to the role,
                                    and her comedic timing all stood out to us. She took what we
                                    wrote and brought her own unique choices to Summer to create a
                                    hilarious and full character. On top of that, she is a warm,
                                    kind, and supportive presence in any room. We can’t
                                    wait to work with her again!"/>
                            </div>
                            <div className={styles.reviewCard}>
                                <ReviewCard reviewer="Asha Etchison" img={franReviews4} title="SinFull" review="Watching Francesca bring Dr. Alicia to life was such a
                                    powerfully beautiful moment to witness as a writer. She
                                    painted her in ways that I hadn't even imagined and brought
                                    such a riveting sense of compassion and heartbreak to the
                                    role. I think the audience will be quite taken by her ability
                                    to ground you, the viewer, into the intimacy of Alicia's inner
                                    turmoil."/>
                            </div>
                        </div>
                </div>
            </main>
    
        </div>
      )
}