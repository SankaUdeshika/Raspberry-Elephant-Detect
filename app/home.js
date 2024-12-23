import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";

const logoPath = require("../assets/images/Logo.png");
const Home = ({navigation}) => {
  const classes = [
    {
      startTime: "21:00",
      endTime: "17:30",
      title: "Elephant Detected on the Road",
      bgColor: "#E0FFFF",
      students: [
        {
          id: "1",
          name: "John",
          avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: "2",
          name: "Emily",
          avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        },
        {
          id: "3",
          name: "Michael",
          avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
        },
        {
          id: "4",
          name: "Michael",
          avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
        },
        {
          id: "5",
          name: "Michael",
          avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
        },
      ],
    },
    {
      startTime: "10:30",
      endTime: "11:00",
      title: "Elephants detected in the river",
      bgColor: "#E6E6FA",
      students: [
        {
          id: "6",
          name: "Sarah",
          avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
        },
        {
          id: "7",
          name: "David",
          avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
        },
        {
          id: "8",
          name: "Sophia",
          avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
        },
      ],
    },
    {
      startTime: "11:00",
      endTime: "11:30",
      title: "Elephants detected in the village",
      bgColor: "#FAF0E6",
      students: [
        {
          id: "9",
          name: "Sarah",
          avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: "10",
          name: "David",
          avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        },
        {
          id: "11",
          name: "Sophia",
          avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
        },
      ],
    },
    {
      startTime: "11:30",
      endTime: "12:30",
      title: "Elephants detected in the Town",
      bgColor: "#FAFAD2",
      students: [
        {
          id: "12",
          name: "Sarah",
          avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
        },
        {
          id: "13",
          name: "David",
          avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
        },
        {
          id: "14",
          name: "Sophia",
          avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
        },
      ],
    },
    // Add more classes as needed
  ];

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{item.startTime}</Text>
          <Text style={styles.endTime}>{item.endTime}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: item.bgColor }]}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDate}>24 March, 18pm - 19pm</Text>
          <FlatList
            contentContainerStyle={styles.studentListContainer}
            data={item.students}
            keyExtractor={(student) => student.id}
            renderItem={({ item: student }) => (
              <Image
                source={{ uri: student.avatar }}
                style={styles.studentAvatar}
              />
            )}
            horizontal
          />
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>History of Notification</Text>
        <Text style={styles.headerSubtitle}>24 AUG, 18pm - 06am</Text>
      </View>

      <View style={styles.body}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.tXyHtZDQ5ConzzTvvd9G3wHaFj?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Wilpattu Area</Text>
          <Text style={styles.userRole}>Detected</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoCover}>
        <Image style={styles.image} source={logoPath} />
      </View>
      <StatusBar backgroundColor="black" barStyle="light-content" animated />
      <Text style={styles.title}>Today's elephant notificaiton</Text>

      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={classes}
        ListHeaderComponent={renderHeader}
        renderItem={renderClassItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 16,
    color: "white",
  },
  card: {
    flex: 1,
    backgroundColor: "#367c2b",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#ffffff",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  userRole: {
    fontSize: 12,
    color: "#ffffff",
  },
  classItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  timelineContainer: {
    width: 30,
    alignItems: "center",
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ff7f50",
    marginBottom: 8,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: "#ff7f50",
  },
  classContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  classHours: {
    marginRight: 8,
    alignItems: "flex-end",
  },
  startTime: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  endTime: {
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: "#00008B",
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: "#00008B",
    marginBottom: 8,
  },
  studentListContainer: {
    marginRight: 10,
  },
  studentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -3,
    borderWidth: 1,
    borderColor: "#fff",
  },
  image: {
    width: 60,
    height: 60,
  },
  logoCover:{
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    marginBottom:20,
  }
});

export default Home;
