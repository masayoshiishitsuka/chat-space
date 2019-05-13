# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB設計


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false, index: true|

### Assosiation
- has_many :groups through :members
- has_many :members
- has-many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|nill:false|

### Assosiation
- has_many :users through :members
- has_many :members
- has-many :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|grouo_id|integer|null: false, foreign_key: true|

### Assosiation
- belongs_to :group
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|nill: true|
|image|string|nill: true|
|group_id|interger|nill: false, index: true|
|user_id|interger|nill: false, index: true|

### Assosiation
- belongs_to :user
- belongs_to :group