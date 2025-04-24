import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle} />
          <Text style={styles.logoText}>CoinApp</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../assets/placeholder.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../assets/placeholder.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../assets/placeholder.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Identify Coin Section */}
        <View style={styles.identifySection}>
          <Text style={styles.identifyTitle}>Identify your coin</Text>
          <Text style={styles.identifySubtitle}>
            Tap here to recognize a coin
          </Text>
          <TouchableOpacity style={styles.identifyButton}>
            <Image
              source={require('../assets/placeholder.png')}
              style={styles.scanIcon}
            />
            <Text style={styles.identifyButtonText}>Identify</Text>
          </TouchableOpacity>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Mint Error History</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Image
                source={require('../assets/placeholder.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>High Value Coin History</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Image
                source={require('../assets/placeholder.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.featureCard, styles.gradeCard]}>
            <View style={styles.gradeContent}>
              <Image
                source={require('../assets/placeholder.png')}
                style={styles.gradeIcon}
              />
              <Text style={styles.gradeText}>Grade your coin</Text>
            </View>
          </View>

          <View style={[styles.featureCard, styles.mintCard]}>
            <View style={styles.mintContent}>
              <Image
                source={require('../assets/placeholder.png')}
                style={styles.mintIcon}
              />
              <Text style={styles.mintText}>Check Mint Error</Text>
            </View>
          </View>
        </View>

        {/* Collection Section */}
        <View style={styles.collectionSection}>
          <View style={styles.collectionHeader}>
            <Text style={styles.collectionTitle}>Create your collection</Text>
            <Text style={styles.collectionSubtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor...
            </Text>
          </View>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Create Collection</Text>
            <Image
              source={require('../assets/placeholder.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Explore Section */}
        <View style={styles.exploreSection}>
          <Text style={styles.exploreTitle}>Explore Content</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            <Image
              source={require('../assets/placeholder.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Featured Content */}
        <View style={styles.featuredContent}>
          <Text style={styles.featuredTitle}>
            Top 30 Low Mintage Circulation Coins
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Add featured items here */}
          </ScrollView>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('../assets/placeholder.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('../assets/placeholder.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('../assets/placeholder.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('../assets/placeholder.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFD811',
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#3B6748',
    fontFamily: 'SF Pro Rounded',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  mainContent: {
    padding: 20,
  },
  identifySection: {
    backgroundColor: '#E6F2E9',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
  },
  identifyTitle: {
    fontSize: 32,
    fontWeight: '500',
    color: '#3F3D3B',
    marginBottom: 4,
    fontFamily: 'SF Pro Rounded',
  },
  identifySubtitle: {
    fontSize: 16,
    color: '#3F3D3B',
    opacity: 0.6,
    marginBottom: 20,
    fontFamily: 'SF Pro Rounded',
  },
  identifyButton: {
    flexDirection: 'row',
    backgroundColor: '#222222',
    borderRadius: 32,
    padding: 12,
    alignItems: 'center',
    gap: 8,
  },
  scanIcon: {
    width: 24,
    height: 24,
  },
  identifyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'SF Pro Rounded',
  },
  featuresSection: {
    marginTop: 20,
  },
  featureCard: {
    backgroundColor: '#222222',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#F6F6F6',
    marginBottom: 12,
    fontFamily: 'SF Pro Rounded',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F6F6F6',
    fontFamily: 'SF Pro Rounded',
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  gradeCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#C3C3C3',
  },
  gradeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  gradeIcon: {
    width: 24,
    height: 24,
  },
  gradeText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222222',
    fontFamily: 'SF Pro Rounded',
  },
  mintCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#C3C3C3',
  },
  mintContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mintIcon: {
    width: 24,
    height: 24,
  },
  mintText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222222',
    fontFamily: 'SF Pro Rounded',
  },
  collectionSection: {
    backgroundColor: '#E6F2E9',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
  },
  collectionHeader: {
    marginBottom: 16,
  },
  collectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#283F2F',
    marginBottom: 8,
    fontFamily: 'SF Pro Rounded',
  },
  collectionSubtitle: {
    fontSize: 14,
    color: '#283F2F',
    opacity: 0.6,
    fontFamily: 'SF Pro Rounded',
  },
  createButton: {
    flexDirection: 'row',
    backgroundColor: '#222222',
    borderRadius: 50,
    padding: 8,
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
  },
  createButtonText: {
    color: '#F4F9F6',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SF Pro Rounded',
  },
  exploreSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  exploreTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#F6F6F6',
    fontFamily: 'SF Pro Rounded',
  },
  featuredContent: {
    marginTop: 20,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 16,
    fontFamily: 'SF Pro Rounded',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#222222',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 12.55,
    fontWeight: '600',
    color: '#F6F6F6',
    fontFamily: 'SF Pro Rounded',
  },
});

export default Home;
