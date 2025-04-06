import styled from "styled-components";
import { useEffect, useState } from "react";
import { Sidebar } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ScrollToTop from "../../ScrollToTop";
import remarkGfm from "remark-gfm";

import LearnNavBar from "../../LearnNavBar";
import Footer from "../../Footer";
import { pythonlessonlist } from "../PythonLessonList";


export default function PythonLessonPage({ lesson, text, prev, post, unit }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const parsedText = text.replace(/\\n/g, '\n').replace('\\n','\n');
    const markdown = parsedText



    return (
        <>
            {/* Header Section */}
            <ScrollToTop />
            <div className="totalHeader"></div>
            <header id="learncoursesHeader">
                <LearnNavBar />
            </header>
            <div id="navigation">
                <p href="https://forms.gle/2KzhePquuNrhmY6m8" target="_blank" className="homeinfototal">
                    {/* <div className="header__toggle" id="header-toggle"><i class="fa-solid fa-bars"></i></div> */}
                    <a href="/courses" className="coursenavlink"><i class="fa-solid fa-house"></i></a> / <a href="/courses/intro-to-python" className="coursenavlink">Introduction to Python</a> / {pythonlessonlist[unit].title}</p>
                <ul>
                    <li>
                        <div className="btn light desktop-btn navbuttonmini header__toggle" onClick={toggle} id="header-toggle"><i class="fa-solid fa-bars"></i></div>
                    </li>
                    <li>
                        <Link to={`/courses/intro-to-python/${prev}`} className="btn light desktop-btn navbutton"><i class="fa-solid fa-chevron-left"></i></Link>
                    </li>
                    <li>
                        <Link to={`/courses/intro-to-python/${post}`} className="btn light desktop-btn navbutton"><i class="fa-solid fa-chevron-right"></i></Link>
                    </li>
                </ul>
            </div>
            {/* Sidebar Section */}
            <div className="">
                <div className="coursesidebar" style={{ left: isOpen ? "0" : "-100%" }} id="coursesidebar">
                    <div className="coursesidebar__container">
                        <div className="coursesidebar__content">
                            <div className="coursesidebar__list">
                                {Array.isArray(pythonlessonlist[unit]?.lessons) ? (
                                    pythonlessonlist[unit].lessons.map((lesson, lessonIndex) => (
                                        <a key={`${unit}-${lessonIndex}`} href={lesson.route} className="coursesidebar__link">
                                            <span className="coursesidebar__link-name">{lesson.name}</span>
                                            <span className="coursesidebar__floating">{lesson.name}</span>
                                        </a>
                                    ))
                                ) : (
                                    <p>No lessons available for this unit.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <main className={`lessoncontent ${isOpen ? 'open' : ''}`} id="lessoncontent">
                    <h2>{lesson}</h2>
                    <div>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ node, ...props }) => <h1 style={{}} {...props} />,
                                // img: ({ node, ...props }) => <img className="courseimg" {...props} />,
                            }}
                        >{markdown}</ReactMarkdown>
                    </div>
                    {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac auctor augue mauris. Tristique risus nec feugiat in. Ultricies mi quis hendrerit dolor magna. Augue interdum velit euismod in pellentesque massa placerat. Id volutpat lacus laoreet non curabitur gravida arcu ac. Semper risus in hendrerit gravida rutrum quisque. Ut morbi tincidunt augue interdum velit. Libero enim sed faucibus turpis in eu mi bibendum neque. Ac ut consequat semper viverra nam libero justo laoreet sit. Posuere morbi leo urna molestie at. Ipsum dolor sit amet consectetur adipiscing elit. Viverra aliquet eget sit amet. Tortor posuere ac ut consequat semper. Nunc sed augue lacus viverra. Aliquet lectus proin nibh nisl condimentum. Nec feugiat in fermentum posuere. Malesuada proin libero nunc consequat interdum varius sit. Diam vulputate ut pharetra sit amet aliquam id. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.

                        Maecenas volutpat blandit aliquam etiam erat. Gravida cum sociis natoque penatibus et. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Proin sagittis nisl rhoncus mattis rhoncus. Magna sit amet purus gravida quis blandit turpis cursus in. Ut consequat semper viverra nam libero justo. Mauris pharetra et ultrices neque ornare aenean euismod. Et ultrices neque ornare aenean euismod elementum. Diam maecenas sed enim ut sem viverra aliquet eget sit. Tellus integer feugiat scelerisque varius morbi. Facilisis volutpat est velit egestas dui. Diam sit amet nisl suscipit adipiscing bibendum est ultricies.

                        Id leo in vitae turpis massa sed elementum tempus egestas. Velit euismod in pellentesque massa. Consectetur lorem donec massa sapien faucibus et. Morbi blandit cursus risus at ultrices mi tempus. Phasellus vestibulum lorem sed risus. Morbi tempus iaculis urna id volutpat. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Non odio euismod lacinia at quis risus sed vulputate. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Vestibulum sed arcu non odio euismod. Tempus iaculis urna id volutpat lacus laoreet non. Lectus arcu bibendum at varius vel pharetra. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Proin sagittis nisl rhoncus mattis rhoncus. A lacus vestibulum sed arcu non odio.

                        Elementum nisi quis eleifend quam adipiscing vitae. Feugiat pretium nibh ipsum consequat. Id faucibus nisl tincidunt eget nullam non nisi est sit. Ultrices mi tempus imperdiet nulla malesuada. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Id porta nibh venenatis cras sed felis eget velit. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Dolor purus non enim praesent elementum facilisis leo. Dui accumsan sit amet nulla. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. At augue eget arcu dictum varius duis. Pretium lectus quam id leo in vitae turpis massa sed. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Et tortor at risus viverra adipiscing at in tellus integer. Ipsum dolor sit amet consectetur adipiscing. Lectus nulla at volutpat diam ut.

                        Tristique senectus et netus et. Aliquam faucibus purus in massa tempor. Urna id volutpat lacus laoreet. Aenean sed adipiscing diam donec adipiscing. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. In vitae turpis massa sed elementum tempus egestas sed sed. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Nam libero justo laoreet sit amet cursus. Molestie nunc non blandit massa enim nec dui. Mauris rhoncus aenean vel elit scelerisque. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Lorem sed risus ultricies tristique nulla aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Porttitor eget dolor morbi non arcu risus quis. Eu sem integer vitae justo eget magna.

                        Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dolor morbi non arcu risus quis varius quam quisque id. Habitant morbi tristique senectus et. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Pellentesque habitant morbi tristique senectus et netus. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Habitasse platea dictumst quisque sagittis purus sit. Ut sem nulla pharetra diam sit amet nisl suscipit. Quis hendrerit dolor magna eget est lorem ipsum dolor. Integer eget aliquet nibh praesent tristique. Et sollicitudin ac orci phasellus. Sagittis nisl rhoncus mattis rhoncus urna.

                        Nec dui nunc mattis enim. Mi eget mauris pharetra et ultrices neque ornare aenean. Augue eget arcu dictum varius duis at. Lectus nulla at volutpat diam ut venenatis. Mattis rhoncus urna neque viverra justo nec ultrices. Duis convallis convallis tellus id interdum velit laoreet id. Amet mauris commodo quis imperdiet massa tincidunt. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Ultrices dui sapien eget mi proin sed libero enim sed. Vel pretium lectus quam id. Viverra orci sagittis eu volutpat odio facilisis mauris. Urna molestie at elementum eu facilisis. Amet dictum sit amet justo. Libero enim sed faucibus turpis in eu. Sapien pellentesque habitant morbi tristique. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Urna nec tincidunt praesent semper feugiat nibh. Mattis molestie a iaculis at erat. Lorem donec massa sapien faucibus et molestie ac. Quis eleifend quam adipiscing vitae.

                        Mattis enim ut tellus elementum sagittis vitae et leo duis. Eu augue ut lectus arcu bibendum at varius. Ac auctor augue mauris augue neque. Vulputate dignissim suspendisse in est ante in. Ultricies leo integer malesuada nunc vel. Vulputate enim nulla aliquet porttitor lacus luctus. Non sodales neque sodales ut etiam sit amet nisl purus. Nibh ipsum consequat nisl vel pretium. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Commodo viverra maecenas accumsan lacus vel facilisis. Nec feugiat in fermentum posuere. Elementum eu facilisis sed odio. Ut tortor pretium viverra suspendisse. Mauris sit amet massa vitae tortor. In massa tempor nec feugiat nisl pretium. Purus gravida quis blandit turpis cursus in hac. Fermentum et sollicitudin ac orci phasellus.

                        Turpis massa sed elementum tempus egestas sed sed risus pretium. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sagittis vitae et leo duis ut diam. Scelerisque viverra mauris in aliquam sem fringilla. Urna duis convallis convallis tellus id interdum. Est ultricies integer quis auctor elit sed. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Adipiscing bibendum est ultricies integer quis. Pellentesque habitant morbi tristique senectus. Urna neque viverra justo nec ultrices dui. Mauris augue neque gravida in fermentum et. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Ultricies tristique nulla aliquet enim tortor at.

                        Sodales ut eu sem integer vitae justo. Luctus venenatis lectus magna fringilla urna. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Aliquam purus sit amet luctus. Ipsum dolor sit amet consectetur adipiscing elit. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fames ac turpis egestas maecenas. Non tellus orci ac auctor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames ac. Nunc sed blandit libero volutpat sed cras.

                        Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Donec ac odio tempor orci dapibus ultrices in iaculis. Sem viverra aliquet eget sit amet tellus cras adipiscing. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Ipsum dolor sit amet consectetur adipiscing. Turpis egestas maecenas pharetra convallis posuere morbi leo. Id faucibus nisl tincidunt eget nullam non. Enim diam vulputate ut pharetra sit amet aliquam id diam. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Magna fringilla urna porttitor rhoncus dolor purus. In mollis nunc sed id semper. Volutpat odio facilisis mauris sit amet massa. Tempor commodo ullamcorper a lacus vestibulum. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Id diam maecenas ultricies mi eget mauris pharetra et ultrices.

                        Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Pretium nibh ipsum consequat nisl. In hendrerit gravida rutrum quisque non. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Volutpat sed cras ornare arcu dui. Et odio pellentesque diam volutpat commodo sed egestas. Scelerisque purus semper eget duis at. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Cursus turpis massa tincidunt dui ut. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Adipiscing elit ut aliquam purus. Leo urna molestie at elementum eu facilisis sed.

                        Viverra suspendisse potenti nullam ac tortor. Aliquam faucibus purus in massa tempor nec feugiat. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tempor orci dapibus ultrices in iaculis. Volutpat sed cras ornare arcu dui. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Tellus integer feugiat scelerisque varius. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Diam in arcu cursus euismod quis viverra nibh cras. Vitae turpis massa sed elementum tempus egestas sed sed. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Proin fermentum leo vel orci porta non pulvinar neque. Tellus elementum sagittis vitae et leo duis ut diam. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est velit egestas dui id ornare arcu odio ut.

                        Morbi tincidunt augue interdum velit euismod in. Risus nec feugiat in fermentum posuere urna nec. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Dui id ornare arcu odio ut sem nulla pharetra diam. Orci dapibus ultrices in iaculis nunc. Nec nam aliquam sem et. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Ut faucibus pulvinar elementum integer enim neque. Rhoncus urna neque viverra justo. Ullamcorper velit sed ullamcorper morbi. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Purus in massa tempor nec feugiat nisl pretium fusce. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Mauris sit amet massa vitae tortor condimentum lacinia quis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Mauris cursus mattis molestie a iaculis at erat pellentesque. Fermentum et sollicitudin ac orci phasellus egestas.

                        Condimentum id venenatis a condimentum vitae sapien. Leo vel orci porta non pulvinar neque laoreet. Convallis posuere morbi leo urna molestie at elementum eu. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Semper quis lectus nulla at. Aliquam sem et tortor consequat id porta nibh venenatis. Fermentum dui faucibus in ornare. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Dapibus ultrices in iaculis nunc sed augue. Urna id volutpat lacus laoreet non curabitur gravida arcu. Facilisi etiam dignissim diam quis enim. Turpis cursus in hac habitasse platea dictumst quisque. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Eu facilisis sed odio morbi quis commodo odio. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Faucibus turpis in eu mi bibendum neque. Ut lectus arcu bibendum at varius vel. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. In dictum non consectetur a erat nam.

                        Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Libero id faucibus nisl tincidunt eget nullam non. Magna eget est lorem ipsum dolor sit amet consectetur. Pulvinar etiam non quam lacus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Purus in mollis nunc sed id semper risus in. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Iaculis nunc sed augue lacus viverra vitae congue. Urna et pharetra pharetra massa massa ultricies mi.

                        Viverra nam libero justo laoreet sit. Suspendisse potenti nullam ac tortor vitae. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Enim lobortis scelerisque fermentum dui faucibus. Sollicitudin nibh sit amet commodo nulla facilisi. Quis blandit turpis cursus in hac habitasse. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Egestas dui id ornare arcu odio ut sem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Viverra nibh cras pulvinar mattis nunc sed blandit libero.

                        Sit amet consectetur adipiscing elit ut aliquam. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Sagittis eu volutpat odio facilisis. Tempus egestas sed sed risus pretium. Mauris sit amet massa vitae tortor condimentum lacinia quis. Accumsan lacus vel facilisis volutpat. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Ultrices in iaculis nunc sed.

                        Sed vulputate odio ut enim blandit volutpat maecenas. Vestibulum lorem sed risus ultricies. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Convallis posuere morbi leo urna. Ullamcorper malesuada proin libero nunc consequat interdum varius. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Est lorem ipsum dolor sit amet consectetur adipiscing elit. At erat pellentesque adipiscing commodo elit at imperdiet. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Ipsum suspendisse ultrices gravida dictum fusce.

                        Orci nulla pellentesque dignissim enim sit amet venenatis. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Turpis tincidunt id aliquet risus. A cras semper auctor neque. Odio morbi quis commodo odio. Ac odio tempor orci dapibus ultrices in iaculis nunc. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Amet risus nullam eget felis. Massa vitae tortor condimentum lacinia quis vel. Fringilla est ullamcorper eget nulla. Arcu odio ut sem nulla pharetra diam. Sodales ut etiam sit amet nisl purus in. Nunc eget lorem dolor sed viverra ipsum nunc. Eget dolor morbi non arcu risus quis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Aliquet porttitor lacus luctus accumsan. Congue nisi vitae suscipit tellus mauris a diam maecenas sed.

                        Velit laoreet id donec ultrices. Ut enim blandit volutpat maecenas volutpat blandit. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Sapien faucibus et molestie ac feugiat sed lectus. In hendrerit gravida rutrum quisque non. Sed enim ut sem viverra. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Morbi tempus iaculis urna id volutpat lacus. In hac habitasse platea dictumst. Rhoncus est pellentesque elit ullamcorper. Rutrum tellus pellentesque eu tincidunt. Et egestas quis ipsum suspendisse ultrices. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec enim diam vulputate ut pharetra sit amet aliquam id.

                        Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Suspendisse in est ante in nibh mauris cursus mattis molestie. Dictum non consectetur a erat nam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Faucibus turpis in eu mi bibendum neque egestas. Ultrices dui sapien eget mi proin sed. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies. Massa ultricies mi quis hendrerit. Viverra vitae congue eu consequat. Proin fermentum leo vel orci. Adipiscing diam donec adipiscing tristique risus nec. Fermentum dui faucibus in ornare. Ultricies lacus sed turpis tincidunt. Iaculis urna id volutpat lacus laoreet. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Eget duis at tellus at urna. Porttitor massa id neque aliquam vestibulum.

                        Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Quisque egestas diam in arcu. Id diam maecenas ultricies mi eget mauris pharetra. Ultrices sagittis orci a scelerisque purus semper eget duis at. Id semper risus in hendrerit gravida rutrum quisque. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Laoreet id donec ultrices tincidunt arcu non sodales. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Ipsum dolor sit amet consectetur adipiscing. Libero volutpat sed cras ornare arcu. Aliquam sem et tortor consequat id porta nibh venenatis.

                        Massa placerat duis ultricies lacus sed turpis tincidunt. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Congue mauris rhoncus aenean vel. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Et tortor consequat id porta nibh. Massa tincidunt nunc pulvinar sapien. Eu turpis egestas pretium aenean pharetra. Ut faucibus pulvinar elementum integer enim neque volutpat. Nunc mattis enim ut tellus elementum. Tempor commodo ullamcorper a lacus. Mattis nunc sed blandit libero volutpat sed. Varius duis at consectetur lorem donec massa. Commodo odio aenean sed adipiscing diam. Feugiat pretium nibh ipsum consequat. Scelerisque purus semper eget duis at tellus. Tortor id aliquet lectus proin nibh. Quis viverra nibh cras pulvinar mattis nunc sed. Elit at imperdiet dui accumsan sit amet nulla.

                        Justo donec enim diam vulputate ut. Faucibus ornare suspendisse sed nisi. Nibh sit amet commodo nulla facilisi. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Hendrerit gravida rutrum quisque non tellus orci. In iaculis nunc sed augue lacus viverra vitae. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Sed risus ultricies tristique nulla aliquet enim tortor. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Eu lobortis elementum nibh tellus molestie nunc non blandit.

                        Gravida quis blandit turpis cursus in hac. Purus non enim praesent elementum facilisis. Molestie ac feugiat sed lectus vestibulum mattis. Sed arcu non odio euismod. At imperdiet dui accumsan sit amet. Eu facilisis sed odio morbi. Ut aliquam purus sit amet luctus venenatis lectus magna. Nisl purus in mollis nunc sed id semper risus. Et netus et malesuada fames ac turpis. At consectetur lorem donec massa sapien faucibus et molestie ac. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Blandit cursus risus at ultrices mi tempus. Morbi enim nunc faucibus a pellentesque sit amet. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Est lorem ipsum dolor sit.

                        Venenatis cras sed felis eget velit. Sodales ut eu sem integer vitae. Aliquet porttitor lacus luctus accumsan tortor posuere. Dignissim convallis aenean et tortor at. Id nibh tortor id aliquet lectus proin. Netus et malesuada fames ac turpis egestas integer. Bibendum est ultricies integer quis auctor elit sed vulputate. Faucibus scelerisque eleifend donec pretium. Semper viverra nam libero justo. Hac habitasse platea dictumst quisque. Libero id faucibus nisl tincidunt. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Tortor aliquam nulla facilisi cras fermentum odio eu. Et malesuada fames ac turpis. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Netus et malesuada fames ac turpis. Porttitor leo a diam sollicitudin.

                        Et sollicitudin ac orci phasellus egestas. Tempus imperdiet nulla malesuada pellentesque. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Adipiscing vitae proin sagittis nisl rhoncus. Praesent elementum facilisis leo vel fringilla. Sed viverra tellus in hac habitasse. Nibh sed pulvinar proin gravida hendrerit. Purus faucibus ornare suspendisse sed nisi lacus. Lectus urna duis convallis convallis tellus. Quisque egestas diam in arcu. Convallis tellus id interdum velit. Ut tristique et egestas quis ipsum. Sodales neque sodales ut etiam sit amet.

                        Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vitae congue mauris rhoncus aenean vel elit. A diam sollicitudin tempor id eu. Viverra accumsan in nisl nisi scelerisque eu ultrices. Laoreet sit amet cursus sit amet dictum sit amet justo. Nec ullamcorper sit amet risus nullam eget felis eget. Dolor sed viverra ipsum nunc aliquet bibendum enim. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Convallis posuere morbi leo urna molestie at elementum eu. Et ultrices neque ornare aenean euismod.

                        Nisl nunc mi ipsum faucibus. Vehicula ipsum a arcu cursus. Sem fringilla ut morbi tincidunt. Nibh venenatis cras sed felis eget velit. At elementum eu facilisis sed odio morbi. Aliquam etiam erat velit scelerisque in dictum non consectetur. Sollicitudin tempor id eu nisl nunc mi. Sed libero enim sed faucibus. Tellus in hac habitasse platea. Adipiscing elit ut aliquam purus. Diam quis enim lobortis scelerisque fermentum. Non nisi est sit amet facilisis magna etiam. Quam vulputate dignissim suspendisse in.</p>
                 */}
                </main>
            </div>
            <Footer />
        </>
    )
}
