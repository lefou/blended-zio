(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{118:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),m=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=m(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(t),b=a,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return t?i.a.createElement(h,c(c({ref:n},l),{},{components:t})):i.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return m}));var a=t(3),i=t(7),r=(t(0),t(118)),o={slug:"zio-jms-keepalive",title:"Keep alive for JMS connections",tags:["ZIO","Streams","JMS"],author:"Andreas Gies",author_url:"https://github.com/atooni"},c={permalink:"/blended-zio/blog/zio-jms-keepalive",source:"@site/blog/2020-11-05-JmsKeepAlive.md",description:"This article concludes the mini series exploring the ZIO Stream API and shows how a simple keepalive mechanism can be added to a JMS based stream. This will check the health of the underlying JMS connection and issue a connection restart if required.",date:"2020-11-05T00:00:00.000Z",tags:[{label:"ZIO",permalink:"/blended-zio/blog/tags/zio"},{label:"Streams",permalink:"/blended-zio/blog/tags/streams"},{label:"JMS",permalink:"/blended-zio/blog/tags/jms"}],title:"Keep alive for JMS connections",truncated:!0,prevItem:{title:"Integration Testing",permalink:"/blended-zio/blog/integration-testing"},nextItem:{title:"Autorecovery for (JMS) Streams",permalink:"/blended-zio/blog/zio-streams-autorecover"}},s=[{value:"References to related posts",id:"references-to-related-posts",children:[]},{value:"A simple Keep Alive monitor",id:"a-simple-keep-alive-monitor",children:[]},{value:"Using the Keep alive monitor with JMS connections",id:"using-the-keep-alive-monitor-with-jms-connections",children:[{value:"Definining a Keep alive Sink",id:"definining-a-keep-alive-sink",children:[]},{value:"Defining a Keep alive Stream",id:"defining-a-keep-alive-stream",children:[]},{value:"Create the JMS Keep Alive Monitor",id:"create-the-jms-keep-alive-monitor",children:[]}]},{value:"Instrumenting a JMS connection with a keep alive monitor",id:"instrumenting-a-jms-connection-with-a-keep-alive-monitor",children:[]},{value:"The program to be run",id:"the-program-to-be-run",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Next steps",id:"next-steps",children:[]}],l={toc:s};function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This article concludes the mini series exploring the ZIO Stream API and shows how a simple keepalive mechanism can be added to a JMS based stream. This will check the health of the underlying JMS connection and issue a connection restart if required. "),Object(r.b)("h1",{id:"why-do-we-need-a-keep-alive"},"Why do we need a keep alive"),Object(r.b)("p",null,"In our existing application we have noticed that in some circumstances a connection that still exists and is reported as ",Object(r.b)("inlineCode",{parentName:"p"},"connected")," within the monitoring tools does not work as expected. In the case of JMS this usually happens when a particular connection is only used to receive messages. The connection may appear as ",Object(r.b)("inlineCode",{parentName:"p"},"connected")," and also have associated JMS sessions and consumers, but still will not receive any messages from the JMS broker."),Object(r.b)("p",null,"Many JMS providers have implemented a keep alive mechanism, but in practice those have been proven to be somewhat difficult:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"They do not work in some edge cases such as restarting network switches on WAN connections."),Object(r.b)("li",{parentName:"ul"},"They are not part of the JMS specification and therefore will be different from vendor to vendor and are definitely not mandatory."),Object(r.b)("li",{parentName:"ul"},"They usually require some vendor specific code to be configured (if not configured via properties over JNDI).")),Object(r.b)("p",null,"A connection which is also used to produce messages normally does require a keep alive monitor because it would encounter a ",Object(r.b)("inlineCode",{parentName:"p"},"JMSException")," when sends are attempted over a stale connection and therefore the connection could be recovered during normal error handling."),Object(r.b)("p",null,"In this article I will pick up from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/blended-zio/blog/zio-streams-autorecover"}),"last article"),", where I investigated how we could leverage the ZIO Api to automatically recover from an exception in the JMS layer without terminating the ZIO stream with an exception."),Object(r.b)("p",null,"We will show a simple keep alive monitor, which doesn't know anything about JMS or streams at all. Then we will create an instance of that monitor watching a created JMS connection issuing a reconnect once the maximum number of missed keep alive events is reached."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The complete source code used in this article can be found on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/blended-zio/blended-zio/tree/main/blended.zio.streams"}),"github")))),Object(r.b)("h2",{id:"references-to-related-posts"},"References to related posts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/blended-zio/blog/zio-streams-jms"}),"Basic streams with JMS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/blended-zio/blog/zio-streams-autorecover"}),"Auto Recovery for ZIO streams"))),Object(r.b)("h2",{id:"a-simple-keep-alive-monitor"},"A simple Keep Alive monitor"),Object(r.b)("p",null,"A keep alive monitor is more or less a counter that is increased at certain intervals. It can be reset by sending it ",Object(r.b)("inlineCode",{parentName:"p"},"alive")," signals. Whenever\nthe counter reaches a defined value ",Object(r.b)("inlineCode",{parentName:"p"},"n")," that practically means that for ",Object(r.b)("inlineCode",{parentName:"p"},"n * interval")," the monitor hasn't received a signal. The monitor as such does\nnot need to know about the entity it monitors, in our case the JMS connection."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"trait KeepAliveMonitor {\n\n  /**\n   * An id to identify the monitor in the logs and metrics.\n   */\n  val id: String\n\n  /**\n   * The maximum number of allowed missed keep alive signals.\n   */\n  val allowed: Int\n\n  /**\n   * Signal that the monitored entity is still alive. This will cause to reset the missed\n   * counter to 0.\n   */\n  def alive: ZIO[Logging, Nothing, Unit]\n\n  /**\n   * Start the monitor with a given interval. At every interval tick the counter\n   * for missed keep alives will be incremented. If the counter reaches the maximum allowed\n   * missed keep alives, run will terminate and yield the current counter (which happens to\n   * be the allowed maximum).\n   */\n  def run(interval: Duration): ZIO[Clock with Logging, Nothing, Unit]\n\n  /**\n   * Return the current count of missed keep alives\n   */\n  def current: ZIO[Any, Nothing, Int]\n}\n")),Object(r.b)("p",null,"The implementation for this interface is fairly straight forward. Within the ",Object(r.b)("inlineCode",{parentName:"p"},"run")," method we execute a step effect, which simply increases the internal\ncounter. If the counter has reached the given maximum, the step function terminates, otherwise the next step is scheduled after the given interval."),Object(r.b)("p",null,"Overall, ",Object(r.b)("inlineCode",{parentName:"p"},"run")," will terminate once the given max count has been reached. Therefore it is always a good idea fo users of the monitor to execute ",Object(r.b)("inlineCode",{parentName:"p"},"monitor.run")," in it's own fiber."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'  private[streams] def run(interval: Duration): ZIO[Clock with Logging, Nothing, Unit] = {\n\n    def go: ZIO[Clock, Nothing, Unit] = ZIO.ifM(missed.updateAndGet(_ + 1).map(_ == allowedKeepAlives))(\n      ZIO.unit,\n      go.schedule(Schedule.duration(interval)).flatMap(_ => ZIO.unit)\n    )\n\n    for {\n      _ <- log.trace(s"Starting KeepAliveMonitor [$name]")\n      _ <- go.schedule(Schedule.duration(interval))\n      c <- missed.get\n      _ <- log.trace(s"KeepAliveMonitor [$name] finished with maximum keep alives of [$c]")\n    } yield ()\n  }\n')),Object(r.b)("h2",{id:"using-the-keep-alive-monitor-with-jms-connections"},"Using the Keep alive monitor with JMS connections"),Object(r.b)("p",null,"With the JMS based streams explained ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/blended-zio/blog/zio-streams-jms"}),"here")," and the general keep alive monitor we can now build a monitor that determines whether a given JMS connection is healthy. We do that by using the connection to be monitored and regularly send and receive messages. Whenever a message is received, we execute ",Object(r.b)("inlineCode",{parentName:"p"},"alive")," on the underlying monitor - effectively resetting the counter."),Object(r.b)("h3",{id:"definining-a-keep-alive-sink"},"Definining a Keep alive Sink"),Object(r.b)("p",null,"From the API perspective we want to create a stream that regularly creates messages and run that with a JMS sink - effectively sending the messages to the JMS broker."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'  private def startKeepAliveSender(\n    con: JmsConnection,\n    dest: JmsDestination,\n    interval: Duration\n  ): ZIO[ZEnv with Logging, JMSException, Unit] = {\n\n    val stream: ZStream[ZEnv, Nothing, String] = ZStream\n      .fromSchedule(Schedule.spaced(interval))\n      .mapM(_ =>\n        currentTime(TimeUnit.MILLISECONDS)\n          .map(t => s"KeepAlive ($con) : ${sdf.format(t)}")\n      )\n\n    createSession(con).use(jmsSess => createProducer(jmsSess).use(prod => stream.run(jmsSink(prod, dest))))\n  }\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Keep in mind that the library has prototyping character for now, so some elements like the ping message format are hard coded for the time being and need to be fleshed out later on."))),Object(r.b)("h3",{id:"defining-a-keep-alive-stream"},"Defining a Keep alive Stream"),Object(r.b)("p",null,"Now we need to define a consumer - in other words a ZIO stream - and for each message received we want to execute ",Object(r.b)("inlineCode",{parentName:"p"},"alive")," on a given ",Object(r.b)("inlineCode",{parentName:"p"},"KeepAliveMonitor"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"  private def startKeepAliveReceiver(\n    con: JmsConnection,\n    dest: JmsDestination,\n    kam: KeepAliveMonitor\n  ): ZIO[ZEnv with Logging, JMSException, Unit] = createSession(con).use { jmsSess =>\n    createConsumer(jmsSess, dest).use(cons => jmsStream(cons).foreach(_ => kam.alive))\n  }\n")),Object(r.b)("h3",{id:"create-the-jms-keep-alive-monitor"},"Create the JMS Keep Alive Monitor"),Object(r.b)("p",null,"The JMS keep alive monitor will be created once a connection configured with monitoring is established. We also need a destination that shall be used for sending and receiving the keep alive messages, an interval and the maximum allowed missed keep alives."),Object(r.b)("p",null,"With those parameters the JMS keep alive monitor is straight forward:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create an an instance of a general ",Object(r.b)("inlineCode",{parentName:"li"},"KeepAliveMonitor")),Object(r.b)("li",{parentName:"ol"},"Start the sink for keep alives"),Object(r.b)("li",{parentName:"ol"},"Start the stream to receive keep alives"),Object(r.b)("li",{parentName:"ol"},"Fork the run method of the just created monitor"),Object(r.b)("li",{parentName:"ol"},"Once run terminates, interrupt the stream and sink"),Object(r.b)("li",{parentName:"ol"},"Terminate with the current count of the underlying monitor")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'  def run(\n    con: JmsConnection,\n    dest: JmsDestination,\n    interval: Duration,\n    allowed: Int\n  ): ZIO[ZEnv with Logging with ZIOJmsConnectionManager, JMSException, Int] = for {\n    kam  <- DefaultKeepAliveMonitor.make(s"${con.id}-KeepAlive", allowed)\n    send <- startKeepAliveSender(con, dest, interval).fork\n    rec  <- startKeepAliveReceiver(con, dest, kam).fork\n    f    <- kam.run(interval).fork\n    _    <- f.join\n    _    <- send.interrupt *> rec.interrupt\n    c    <- kam.current\n  } yield (c)\n')),Object(r.b)("h2",{id:"instrumenting-a-jms-connection-with-a-keep-alive-monitor"},"Instrumenting a JMS connection with a keep alive monitor"),Object(r.b)("p",null,"The API has a case class exposed for a JMS connection:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'final case class JmsConnectionFactory(\n  override val id: String,\n  factory: ConnectionFactory,\n  reconnectInterval: Duration,\n  onConnect: JmsConnection => ZIO[ZEnv with Logging, Nothing, Unit] = _ => ZIO.unit\n) extends JmsApiObject {\n  def connId(clientId: String): String = s"$id-$clientId"\n}\n')),Object(r.b)("p",null,"In here we see that the case class also contains an effect which will be executed every time a physical connection to the JMS broker has been established. This effect takes the ",Object(r.b)("inlineCode",{parentName:"p"},"JMSConnection")," as a parameter. We can now use ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," to set up the keep alive monitor."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'  private def keepAlive(\n    conMgr: SingletonService[ZIOJmsConnectionManager.Service]\n  ): JmsConnection => ZIO[ZEnv with Logging, Nothing, Unit] = { c =>\n    val ka = ZIO\n      .ifM(\n        JmsKeepAliveMonitor\n          .run(c, JmsQueue("keepAlive"), 1.second, 3)\n          .map(_ == allowedKeepAlives)\n      )(\n        reconnect(c, Some(new KeepAliveException(c.id, allowedKeepAlives))),\n        ZIO.unit\n      )\n\n    val monitor: ZIO[ZEnv with Logging with ZIOJmsConnectionManager.ZIOJmsConnectionManager, JMSException, Unit] = for {\n      f <- ka.fork\n      _ <- log.trace(s"Waiting for keep alive monitor for [$c]")\n      _ <- f.join\n    } yield ()\n\n    val effect = for {\n      // We need to specify the left over !!!\n      _ <- monitor.provideSomeLayer[ZEnv with Logging](ZIOJmsConnectionManager.Service.live(conMgr)).forkDaemon\n    } yield ()\n\n    effect\n  }\n')),Object(r.b)("p",null,"Let's break this down a bit:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"First we run an instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"JMSKeepAliveMonitor")," which either terminates when the maximum number of missed keep alives has been reached or the application terminates. In the first case we need to issue a reconnect on the JMS connection using an underlying connection manager.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Then we wrap running the monitor in it's own fiber and wait for it to terminate.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The final step is perhaps a bit confusing, the case class defines ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," to require an environment ",Object(r.b)("inlineCode",{parentName:"p"},"[ZEnv with Logging]"),", but using ",Object(r.b)("inlineCode",{parentName:"p"},"reconnect")," also requires a ",Object(r.b)("inlineCode",{parentName:"p"},"ZIOJMSConnectionManager")," to be present in the environment. Therefore we pass a ",Object(r.b)("inlineCode",{parentName:"p"},"SingletonService[ZIOJmsConnectionManager.Service]")," as a parameter to the ",Object(r.b)("inlineCode",{parentName:"p"},"keepAlive")," method."),Object(r.b)("p",{parentName:"li"}," We can the use ",Object(r.b)("inlineCode",{parentName:"p"},"provideSomeLayer")," to provide the connection manager to the ",Object(r.b)("inlineCode",{parentName:"p"},"JMSKeepAliveMonitor")," and we are left with an effect that requires only ",Object(r.b)("inlineCode",{parentName:"p"},"[ZEnv with Logging]")," which is what we need to fulfill the API."))),Object(r.b)("p",null,"With the keepAlive method in place we can now create the connection factory. Again, we see an instance of the connection manager service passed through."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'  private def amqCF(si: SingletonService[ZIOJmsConnectionManager.Service]): JmsConnectionFactory = JmsConnectionFactory(\n    "amq:amq",\n    new ActiveMQConnectionFactory("vm://simple?create=false"),\n    3.seconds,\n    keepAlive(si)\n  )\n')),Object(r.b)("h2",{id:"the-program-to-be-run"},"The program to be run"),Object(r.b)("p",null,"First of all we need to create an instance of a ",Object(r.b)("inlineCode",{parentName:"p"},"ZIOJmsConnectionManager.Service"),". This instance is then passed to the actual logic, so that the keep alive monitor can use it to inject it into the environment of ",Object(r.b)("inlineCode",{parentName:"p"},"JMSKeepAliveMonitor.run"),". The instance is also required by the logic effect itself, otherwise the connections could not be established to create the streams and sinks."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'  private val program: ZIO[ZEnv with AMQBroker.AMQBroker with Logging, Throwable, ExitCode] = {\n\n    def logic(si: SingletonService[ZIOJmsConnectionManager.Service]) = for {\n      _         <- putStrLn("Starting JMS Broker") *> ZIO.service[BrokerService]\n      f         <- ZIO.unit.schedule(Schedule.duration(30.minutes)).fork\n      jmsStream <- recoveringJmsStream(amqCF(si), clientId, testDest, 2.seconds)\n      jmsSink   <- recoveringJmsSink(amqCF(si), clientId, testDest, 1.second)\n      consumer  <- jmsStream.foreach(s => putStrLn(s)).fork\n      producer  <- stream.run(jmsSink).fork\n      _         <- f.join >>> consumer.interrupt >>> producer.interrupt\n    } yield ()\n\n    for {\n      si <- ZIOJmsConnectionManager.Service.singleton\n      _  <-\n        logic(si).provideSomeLayer[ZEnv with AMQBroker.AMQBroker with Logging](ZIOJmsConnectionManager.Service.live(si))\n    } yield ExitCode.success\n  }\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"SingletonService")," here simply encapsulates a reference to an ",Object(r.b)("inlineCode",{parentName:"p"},"Option[A]")," and an effect to create an ",Object(r.b)("inlineCode",{parentName:"p"},"A")," to create an ",Object(r.b)("inlineCode",{parentName:"p"},"A")," upon the first retrieval. Other retrievals will simply reuse the instance created before."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Using the Singleton is an antipattern and the connection manager will be refactored not to use it in future versions. "))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"package blended.zio.streams\n\nimport zio._\n\nprivate[streams] trait SingletonService[A] {\n\n  private[streams] val instance: Ref[Option[A]]\n  private[streams] def makeService: ZIO[Any, Nothing, A]\n\n  private[streams] def service: ZIO[Any, Nothing, A] = for {\n    sr  <- instance.get\n    svc <- sr match {\n             case Some(s) => ZIO.succeed(s)\n             case None    =>\n               for {\n                 s <- makeService\n                 _ <- instance.set(Some(s))\n               } yield s\n           }\n  } yield (svc)\n}\n\nobject SingletonService {\n  def fromEffect[A](e: ZIO[Any, Nothing, A]): ZIO[Any, Nothing, SingletonService[A]] = for {\n    inst <- Ref.make[Option[A]](None)\n    svc   = new SingletonService[A] {\n              override private[streams] val instance    = inst\n              override private[streams] def makeService = e\n            }\n  } yield (svc)\n}\n\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ZIOJmsConnectionManager")," uses the ",Object(r.b)("inlineCode",{parentName:"p"},"SingletonService")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"    val singleton: ZIO[Any, Nothing, SingletonService[Service]] =\n      SingletonService.fromEffect(createLive)\n\n    def live(s: SingletonService[Service]): ZLayer[Any, Nothing, ZIOJmsConnectionManager] = ZLayer.fromEffect(s.service)\n")),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"We have added a simple keep alive mechanism to the JMS connections we have discussed in the previous articles. The keep alive build on the streams with\nauto recovery and triggers a reconnect once a limit of maximum missed keep alives has been reached. The reconnect then triggers the recovery and reconnect as defined for auto recovery."),Object(r.b)("p",null,"For the users of the stream the keep alive and potential reconnect is completely transparent. Further, the ",Object(r.b)("inlineCode",{parentName:"p"},"onConnect")," effect would allow us to instrument the connection factory with other effects - for example to collect metrics or publish JMX information."),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Apart from finalizing the API there are more areas to explore:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use defined types rather than only String as message payloads."),Object(r.b)("li",{parentName:"ul"},"Support arbitrary message properties."),Object(r.b)("li",{parentName:"ul"},"Look into defining message flows on top of streams with error handling and acknowledgements."),Object(r.b)("li",{parentName:"ul"},"Explore ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/zio/zio-zmx"}),"zio-zmx")," to visualize the current state of all fibers within a running application (for learning about threads primarily)"),Object(r.b)("li",{parentName:"ul"},"Build a sample application that represents a JMS bridge",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Consume message from provider A"),Object(r.b)("li",{parentName:"ul"},"Send the message to provider B"),Object(r.b)("li",{parentName:"ul"},"Acknowledge the message if and only if the send was successful, otherwise pass the message to a retry handler"),Object(r.b)("li",{parentName:"ul"},"Replay messages from the retry handler up to a given retry count until the send was successful. If the maximum retries have been reached or a given amount of time has passed before the send was successful, the message shall be processed by an error handler."),Object(r.b)("li",{parentName:"ul"},"Messages in the retry handler shall be persisted and survive an application restart.")))))}m.isMDXComponent=!0}}]);