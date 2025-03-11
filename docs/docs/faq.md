# Frequently Asked Questions

### Gigapipe Cloud

#### 👂 How quickly does data appear?
Data ingested through the API is available within a couple of seconds.

#### 👂 Where is my data stored?
Data is stored uniquely in your instance storage using the region selected at signup.

#### 👂 How much data can I ingest?
As much as you want within your monthly bandwidth limit and global storage allowance. 

#### 👂 How is my data rotated?
Data is automatically rotated when your storage reaches ~90% capacity to make space for new data.

- ⛽ Example 1: ~15GB/day hep ingestion with 1TB storage = ~2 months of data rotation<br>
- ⛽ Example 2: ~30GB/day hep ingestion with 1TB storage = ~1 month of data rotation<br>

### Gigapipe Open Source

#### 👂 What happened to qryn?
Nothing. Gigapipe is qryn. qryn is Gigapipe. We just simplified our branding.

#### 👂 What is the license for gigapipe?
Gigapipe OSS (formerly qryn) is distributed under the AGPLv3 License.

#### 👂 What is the differebce between OSS and Cloud?
Codewise, none. All features are exactly the same with no tricks or "open core. 

The Cloud version offers some parallel capabilities, including:

- ⛽ Cardinality Management and Label Compaction
- ⛽ Advanced Caching of Query Results
- ⛽ Partitioning and User Provisioning
- ⛽ Custom Rotation and Cold Storage at DB level

